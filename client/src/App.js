import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom';
import Login from './containers/Login/Login'
import Profile from './containers/Profile/Profile';
import CreateClaim from './containers/CreateClaim/CreateClaim';
import Dashboard from './containers/Dashboard/Dashboard'
import Register from './containers/Register/Register';
import Auth from './components/Auth';
import Error404 from './components/Error404'
import { library } from '@fortawesome/fontawesome-svg-core';


import { faPlus,faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus,faSearch)

class App extends Component {
 
  
  render() {
    return (
    
      
      <div >
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
