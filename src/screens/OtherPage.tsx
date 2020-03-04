import React from 'react'
import { Link } from 'react-router-dom'

class OtherPage extends React.Component {
  render() {
    return (
      <>
        <div>Other Page</div>

        <div>
          <Link to="/">Localities</Link>
        </div>

        <div>
          <Link to="/hooks">Localities built with hooks</Link>
        </div>
      </>
    )
  }
}

export default OtherPage
