import React,{Component} from 'react';
import './Layout.css'
import Header from '../../components/Header/Header';
import axios from 'axios';



class Layout extends Component{
    state={
        user:''
    }
    componentDidMount(){
        axios.get('/api/view')
        .then(res=>this.setState({user:res.data.user1}))
    }
    render(){
        return(
            <div className="layout">
              <Header user={this.state.user}/> 
              {this.props.children}
              
          </div>
        );

    }
}


export default Layout;