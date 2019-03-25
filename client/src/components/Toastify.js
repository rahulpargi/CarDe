import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

class Toastify extends Component {
    notify = () => toast(this.props.error);

    render(){
      return (
        <div>
          
          <ToastContainer />
        </div>
      );
    }
}

export default Toastify;