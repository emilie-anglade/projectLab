import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Connexion from './components/Connexion';
import Home from './components/Home';
import Inscription from './components/Inscription';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
