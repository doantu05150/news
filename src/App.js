import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Answer from './pages/hoi-dap'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/hoi-dap">
          <Answer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
