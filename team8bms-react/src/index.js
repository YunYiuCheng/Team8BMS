import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Fourthfloor from './views/fourthfloor'
import Element from './views/element'
import Dinosaur from './views/dinosaur'
import Secondfloor from './views/secondfloor'
import Bug from './views/bug'
import Biodiversity from './views/biodiversity'
import Relics from './views/relics'
import Firstfloor from './views/firstfloor'
import Artifact from './views/artifact'
import Thirdfloor from './views/thirdfloor'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Fourthfloor} exact path="/fourthfloor" />
        <Route component={Element} exact path="/element" />
        <Route component={Dinosaur} exact path="/" />
        <Route component={Secondfloor} exact path="/secondfloor" />
        <Route component={Bug} exact path="/bug" />
        <Route component={Biodiversity} exact path="/biodiversity" />
        <Route component={Relics} exact path="/relics" />
        <Route component={Firstfloor} exact path="/firstfloor" />
        <Route component={Artifact} exact path="/artifact" />
        <Route component={Thirdfloor} exact path="/thirdfloor" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
