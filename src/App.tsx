import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Localities from 'screens/Localities'
import LocalitiesHooks from 'screens/LocalitiesHooks'
import OtherPage from 'screens/OtherPage'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Localities} />
      <Route exact path="/hooks" component={LocalitiesHooks} />
      <Route exact path="/other" component={OtherPage} />
    </Router>
  )
}

export default App
