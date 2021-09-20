import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Batch from './Components/pages/Batch';
import SignUp from './Components/pages/SignUp';
import Course from './Components/pages/Course';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact Component={Home} />
          <Route path='/Batch' component={Batch} />
          <Route path='/course' component={Course} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;