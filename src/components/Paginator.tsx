import { usePagination } from 'hooks'

function Paginator({ getNextPage }: { getNextPage: () => any }) {
  usePagination(getNextPage)
  return null
}

export default Paginator
