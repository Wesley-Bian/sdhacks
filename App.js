import 'react-native-gesture-handler';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import CustomerHome from './app/CustomerHome';
import EmployeeHome from './app/EmployeeHome';
import CustomerAdd from './app/CustomerAdd';
import Home from './app/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/employee'><EmployeeHome /></Route>
        <Route exact path='/waitlist'><CustomerHome /></Route>
        <Route exact path='/waitlist/add'><CustomerAdd /></Route>
        <Route path ='/:id'>
          <p>page does not exist</p>
        </Route>
      </Switch>
    </Router>
  );
}
