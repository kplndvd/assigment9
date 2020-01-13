

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import NewStudent from "./components/NewStudent"
import Dashboard from "./components/Dashboard"
import ShowStudentList from "./components/ShowStudentList"
import ShowSingleStudent from './components/ShowSingleStudent'
import Home from './components/Home'


function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home </Link>
        <Link to="/addNewStudent">Add New Student </Link>
        <Link to="/ShowSingleStudent">Show Single Student </Link>
        <Link to="/ShowStudentList">Show Student List </Link>
        <Link to="/Dashboard"> Dashboard Statistics </Link>
        
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/addNewStudent">
            <NewStudent />
          </Route>
          
          <Route exact path="/ShowSingleStudent">
            <ShowSingleStudent />
          </Route>
          
          <Route exact path="/ShowStudentList">
            <ShowStudentList />
          </Route>
          
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
        
        </Switch>
      </Router>

    </div>
  );
}

export default App;
