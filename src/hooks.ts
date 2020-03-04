import { useEffect, useRef, useCallback } from 'react'

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
