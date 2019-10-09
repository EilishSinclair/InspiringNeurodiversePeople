import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import JohnM from './JohnM'
import LaurenD from './LaurenD'
import HannahH from './HannahH'
import EilishS from './EilishS'

const App = () => {
  return (
    <div>
      <Router>
        <div className="container">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route exact path='/' component={Footer} />
          <Route exact path='/' component={Header} />
          <Route exact path='/JohnM' component={JohnM} />
          <Route exact path='/LaurenD' component={LaurenD} />
          <Route exact path='/HannahH' component={HannahH} />
          <Route exact path='/EilishS' component={EilishS} />
        </div>
      </Router>
    </div>
  )
}

export default App
