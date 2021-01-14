import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreateProject from './components/CreateProject';
import Home from './components/Home';
import MembersList from './components/MembersList';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/createproject">
            <CreateProject />
          </Route>
          <Route path="/memberslist">
            <MembersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
