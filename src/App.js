import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, Login } from './pages'
// import Navbar from './components/common/Navbar'

function App() {
  return (
    <Router>
      <div>
        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div>
    //   <HomePage />
    //   {/* <DisplayNone>
    //     <Router>
    //       <div>
    //         <Navbar />

    //         <hr />

    //         <Switch>
    //           <Route exact path="/">
    //             <HomePage />
    //           </Route>
    //           <Route exact path="/login">
    //             <Login />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </Router>
    //   </DisplayNone> */}
    // </div>
  )
}

export default App
