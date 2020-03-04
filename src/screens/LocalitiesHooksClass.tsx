import React from 'react'
import { Link } from 'react-router-dom'
import request from 'request-dot-js'

import { Locality, ListData } from 'types'
import LocalityCard from 'components/LocalityCard'
import Paginator from 'components/Paginator'

type Data = ListData<Locality>

class LocalitiesHooks extends React.Component<{}, { data: Data; loading: boolean; next: string | null }> {
  state = {
    data: { next: null, previous: null, results: [] } as Data,
    next: 'https://api.brigada.mx/api/localities/?page_size=20',
    loading: false,
  }

  componentDidMount() {
    this.getNextPage()
  }

  getNextPage = async () => {
    const { data, next } = this.state
    this.setState({ loading: true })
    const res = await request<Data>(next)
    if (res.type === 'success') {
      this.setState({ data: { ...res.data, results: [...data.results, ...res.data.results] } })
      if (res.data.next) this.setState({ next: res.data.next })
    }
    this.setState({ loading: true })
  }

  render() {
    const { data, loading } = this.state

    return (
      <div>
        <Paginator getNextPage={this.getNextPage} />
        <Link to="/other">Other Page</Link>
        {data.results.map(loc => (
          <LocalityCard key={loc.id} locality={loc} />
        ))}
        {loading && <div style={{ fontSize: 100 }}>Loading...</div>}
      </div>
    )
  }
}

export default LocalitiesHooks
