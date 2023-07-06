import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Dinosaur from './views/dinosaur'
import Firstfloor from './views/firstfloor'
import Artifact from './views/artifact'
import Bug from './views/bug'
import Biodiversity from './views/biodiversity'
import Fourthfloor from './views/fourthfloor'
import Thirdfloor from './views/thirdfloor'
import Secondfloor from './views/secondfloor'
import Relics from './views/relics'
import Artifact1 from './views/artifact1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Dinosaur} exact path="/" />
        <Route component={Firstfloor} exact path="/firstfloor" />
        <Route component={Artifact} exact path="/artifact" />
        <Route component={Bug} exact path="/bug" />
        <Route component={Biodiversity} exact path="/biodiversity" />
        <Route component={Fourthfloor} exact path="/fourthfloor" />
        <Route component={Thirdfloor} exact path="/thirdfloor" />
        <Route component={Secondfloor} exact path="/secondfloor" />
        <Route component={Relics} exact path="/relics" />
        <Route component={Artifact1} exact path="/artifact1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
