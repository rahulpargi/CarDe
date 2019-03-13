import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile';
import CreateClaim from './components/CreateClaim';
import Dashboard from './components/Dashboard'
import Register from './components/Register';
import Auth from './components/Auth';
import Error404 from './components/Error404'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

class App extends Component {
 
  
  render() {
    return (
    
      
      <div className="App">
      <Switch>
     
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/profile" component={Auth(Profile)}/>
       
        <Route exact  path="/create" component={Auth(CreateClaim)}/>
    
        <Route  exact path="/view" component={Auth(Dashboard)}/>
       
       
 
        <Route   component={Error404}/>
      </Switch>
      </div>
      
      
    );
  }
}

export default App;
