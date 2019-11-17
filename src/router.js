import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home'

const RouterComponent = () => (
    <Router>
    <div>
      <Route path="/" component={Home} />
      {/* <Route path="/movies" component={Users} /> */}
      {/* <Route path="/movies" component={Contact} /> */}
    </div>
  </Router>
)

export default RouterComponent