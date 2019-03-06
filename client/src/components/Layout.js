import React,{Component} from 'react';
import Header from './Header';
import Profile from './Profile';
import CreateClaim from './CreateClaim';
import {Route,Link} from 'react-router-dom'




class Layout extends Component{
    render(){
        return(
            <div>
              <Header/> 
              {this.props.children}
              
          </div>
        );

    }
}


export default Layout;