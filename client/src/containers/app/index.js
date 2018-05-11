import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Map from '../map'
import Friends from '../friends'

import './index.css'

const App = () => (
  <div>
    <header>
      <h1 className={"mainTitle"}>Thank Mr Goose</h1>
      <div className={"navWrapper"}>
        <div className={"linkWrapper"}>
          <Link to="/"><div className={"buttonInner"}>My Collection</div></Link>
        </div>
        <div className={"linkWrapper"}>
          <Link to="/friends"><div className={"buttonInner"}>Friends</div></Link>
        </div>
        <div>
          <Link to="/login"><div>Temp Login Link</div></Link>
        </div>
      </div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/friends" component={Friends} />
    </main>
  </div>
)

export default App;
