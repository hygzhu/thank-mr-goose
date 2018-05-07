import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Map from '../map'
import Friends from '../friends'

const App = () => (
  <div>
    <header>
      <h1>Thank Mr Goose</h1>
      <div>
        <div><Link to="/">My Collection</Link></div>
        <div><Link to="/friends">Friends</Link></div>
        <div><Link to="/login">Temp Login Link</Link></div>
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
