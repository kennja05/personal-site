import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import TripTracker from './individualProjects/Triptracker'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path = '/projects' component={Projects} />
        <Route exact path='/projects/triptracker' component={TripTracker}/>
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
