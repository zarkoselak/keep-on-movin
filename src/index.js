import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './app.js'
import Login from './components/login/login.js'


render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}></Route>
    <Route path="/app" component={App}></Route>
  </Router>
), document.getElementById('app'));