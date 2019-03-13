import React,{Component} from 'react';
import Header from './Header';
import './Layout.css'




class Layout extends Component{
    render(){
        return(
            <div className="layout">
              <Header/> 
              {this.props.children}
              
          </div>
        );

    }
}


export default Layout;