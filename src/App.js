import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HEADER from './components/HEADER'
import FOOTER from './components/FOOTER'
import Main from './components/Main'
import Contact from './components/Contact'
import Catalog from './components/Catalog'
import Info from './components/Info'
import Babybook from './components/Babybook'
import ChildAlb from './components/ChildAlb'
import ScrapAlb from './components/ScrapAlb'
import Mother from './components/Mother'
import Checkbook from './components/Checkbook'
import Cook from './components/Cook'
import WeddingAlb from './components/WeddingAlb'
import Albums from './components/Albums'
function App() {
  return (
    <>
      <HEADER />
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Catalog" component={Catalog} />
          <Route path="/Info" component={Info} />
          <Route path="/Babybook" component={Babybook} />
          <Route path="/ChildAlb" component={ChildAlb} />
          <Route path="/ScrapAlb" component={ScrapAlb} />
          <Route path="/Mother" component={Mother} />
          <Route path="/Checkbook" component={Checkbook} />
          <Route path="/Cook" component={Cook} />
          <Route path="/WeddingAlb" component={WeddingAlb} />
          <Route path="/Albums" component={Albums} />
        </Switch>
      </Router>
      <FOOTER />
    </>
  )
}

export default App
