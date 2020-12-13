import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import routers from './route/index'
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        {routers.map((router) => {
          return (
            <Route
              key={router.path}
              path={router.path}
              component={router.component}
              exact={router.exact}
            ></Route>
          )
        })}
        <Redirect to="/error"></Redirect>
      </Switch>
    </HashRouter>
  )
}

export default App
