import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import TicTac from '../containers/TicTac'
import Profile from '../containers/Profile'

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
      <IndexRoute
        component={TicTac}
      />
      <Route
        path={'/profile'}
        component={Profile}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes
