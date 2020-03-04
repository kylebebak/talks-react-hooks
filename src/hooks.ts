import { useEffect, useRef, useCallback, useState } from 'react'
import { Response, SuccessResponse, ErrorResponse } from 'request-dot-js'

const store: { [key: string]: Response | undefined } = {}

/**
 * Invokes `getter`, throws response into global `store`, and returns response from this `store`.
 *
 * Data is only refetched if `key` changes; passing in a new `getter` function alone doesn't refetch data.
 */
export function useGetter<T>(getter: (() => Promise<Response<T>>) | null | undefined, key: string) {
  const [forceUpdateCounter, setForceUpdateCounter] = useState(0)

  useEffect(() => {
    if (getter) {
      getter().then(res => {
        if (res.type !== 'exception') {
          store[key] = res
          setForceUpdateCounter(forceUpdateCounter + 1)
        }
      })
    }
  }, [key]) // eslint-disable-line

  return store[key] as SuccessResponse<T> | ErrorResponse | undefined
}

export function usePagination(getNextPage: () => any) {
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
}
