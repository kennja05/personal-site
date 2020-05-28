import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path = '/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
