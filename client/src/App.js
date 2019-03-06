import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile';
import CreateClaim from './components/CreateClaim';
import Dashboard from './components/Dashboard'
import Register from './components/Register'

class App extends Component {
 
  
  render() {
    return (
    
      
      <div className="App">
      <Switch>
     
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        
        <Route path="/profile" component={Profile}/>
        <Route path="/create" component={CreateClaim}/>
        <Route path="/view" component={Dashboard}/>
      </Switch>
      </div>
      
      
    );
  }
}

export default App;
