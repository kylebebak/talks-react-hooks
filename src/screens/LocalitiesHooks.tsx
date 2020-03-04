import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import request from 'request-dot-js'

import { Locality, ListData } from 'types'
import { usePagination } from 'hooks'
import LocalityCard from 'components/LocalityCard'

type Data = ListData<Locality>

function LocalitiesHooks(props: {}) {
  const [data, setData] = useState<Data>({ next: null, previous: null, results: [] })
  const [next, setNext] = useState('https://api.brigada.mx/api/localities/?page_size=20')
  const [loading, setLoading] = useState(false)

  const getNextPage = useCallback(async () => {
    setLoading(true)
    const res = await request<Data>(next)
    if (res.type === 'success') {
      setData({ ...res.data, results: [...data.results, ...res.data.results] })
      if (res.data.next) setNext(res.data.next)
    }
    setLoading(false)
  }, [data, next])

  usePagination(getNextPage)

  useEffect(() => {
    getNextPage()
  }, [])

  return (
    <div>
      <Link to="/other">Other Page</Link>
      {data.results.map(loc => (
        <LocalityCard key={loc.id} locality={loc} />
      ))}
      {loading && <div style={{ fontSize: 100 }}>Loading...</div>}
    </div>
  )
}

export default LocalitiesHooks
