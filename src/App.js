

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

// function passerforstate(){

// }

function App() {
  return (
    <div className="App">
{/* className="navbar" className="navbar_links navbar_home" className="navbar_links navbar_newstudent"
className="navbar_links navbar_single" className="navbar_links navbar_list" className="navbar_links navbar_dash" */}
      <Router >
        <div >
         <Link to="/" className = 'linknav'> Home/  </Link> 
         <Link to="/addNewStudent" className = 'linknav'> Add New Student/ </Link> 
        
        <Link to="/ShowStudentList" className = 'linknav' > Show Student List/  </Link>
        <Link to="/Dashboard" className = 'linknav'>  Dashboard Statistics/ </Link>
        </div>
        <Switch>

           <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/addNewStudent">
            <NewStudent />
          </Route>
          
          <Route path="/ShowSingleStudent">
            <ShowSingleStudent id={"id"}/>
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
