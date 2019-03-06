import React, { Component } from 'react';
import {
  Container
} from 'react-bootstrap';
import Header from './components/Header'
import Register from './components/Register'

class App extends Component {
 
  componentDidMount(){
    fetch('/api')
    .then(response => response.json())
    .then(data => this.setState({name:data.a}));
  }
  render() {
    return (
    
      
      <div className="App">
     
      <Header/>
     
      </div>
      
      
    );
  }
}

export default App;
