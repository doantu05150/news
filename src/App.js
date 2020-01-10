import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, Answer } from './pages'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />

          <hr />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/hoi-dap">
              <Answer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
