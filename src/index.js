import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

import AsyncComponent from './utils/AsyncComponent'
import AppTemplate from './AppTemplate'

const Home = () => import(/* webpackChunkName: "Home" */ './Home')
const Avatar = () => import(/* webpackChunkName: "Avatar" */ './Avatar')

render(
  <Router>
    <AppTemplate>
      <Route exact path='/' component={() => <AsyncComponent moduleProvider={Home} />} />
      <Route exact path='/avatar' component={() => <AsyncComponent moduleProvider={Avatar} />} />
    </AppTemplate>
  </Router>,
  document.getElementById('app')
)
