import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import request from 'request-dot-js'

import { Locality, ListData } from 'types'
import LocalityCard from 'components/LocalityCard'

type Data = ListData<Locality>

// open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/tmp/chrome_dev_session" --disable-web-security

function Localities(props: {}) {
  const [data, setData] = useState<Data>({ next: null, previous: null, results: [] })
  const [next, setNext] = useState('https://api.brigada.mx/api/localities/?page_size=20')
  const [val, setVal] = useState(false)

  const getNextPage = useCallback(async () => {
    const res = await request<Data>(next)
    if (res.type === 'success') {
      setData({ ...res.data, results: [...data.results, ...res.data.results] })
      if (res.data.next) setNext(res.data.next)
    }
  }, [data, next])

  const loadingRef = useRef(false)

  const handleScroll = useCallback(async () => {
    const rootElement = document.getElementById('root') as HTMLElement
    if (loadingRef.current) return

    if (window.innerHeight + document.documentElement.scrollTop >= rootElement.offsetHeight - 50) {
      loadingRef.current = true
      await getNextPage()
      loadingRef.current = false
    }
  }, [getNextPage])

  useEffect(() => {
    window.onscroll = handleScroll

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    getNextPage()
  }, [])

  return (
    <div>
      <Link to="/other">Other Page</Link>
      <div onClick={() => setVal(!val)}>{val ? 'true' : 'false'}</div>
      {data.results.map(loc => (
        <LocalityCard key={loc.id} locality={loc} />
      ))}
      {loadingRef.current && <div style={{ fontSize: 100 }}>Loading...</div>}
    </div>
  )
}

export default Localities
