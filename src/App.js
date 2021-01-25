import React from 'react'
import './App.css'
import HEADER from './components/HEADER'
import FOOTER from './components/FOOTER'
import Main from './components/Main'
import Contact from './components/Contact'
import Catalog from './components/Catalog'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HEADER />
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Catalog" component={Catalog} />
        </Switch>
      </Router>
      <FOOTER />
    </>
  )
}

export default App
