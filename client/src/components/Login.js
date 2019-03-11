import React from 'react';
import {Form,Button,Col,Jumbotron} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios'
import "./Login.css";



class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            adjustoremail: '',
            adjustor_password: ''
        };
    }

    validateForm(){
        return this.state.adjustoremail.length>0 && this.state.adjustor_password.length>0;
    }

    handleChange=event=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    handleSubmit=event=>{
        event.preventDefault();
        const data=this.state;
        axios.post('/api/authenticate',data)
        .then(res=>{
           if(res.status === 200){
               this.props.history.push('/profile');
           }else{
               const error = new Error(res.error);
               throw error
           }
        })
        .catch(error=>{
            console.log('error');
        });
    }

    render(){
        return(
          <div className="Login" >
            <Form onSubmit={this.handleSubmit}>
         
                <Form.Group controlId="adjustoremail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        autoFocus
                        
                        onChange={this.handleChange}
                        type="email" 
                        placeholder="Enter Email" />
                   
                </Form.Group>
            
                <Form.Group controlId="adjustor_password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        
                       
                        onChange={this.handleChange}
                        type="password" 
                        placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                <Button
                    block
                    disabled={!this.validateForm()} 
                    variant="primary"
                    type="submit">
                    Login
                </Button>
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                <Link to="/register">  <Button
                    block
                   
                    variant="primary"
                    type="submit"
                    Component={Link}
                    to="/register"
                    >
                   Register
                   
                </Button></Link>
                </Form.Group>
                
                
               
               
            </Form>
            </div>
        )
           
        
    }
}

export default Login;