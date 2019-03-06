import React from 'react';
import {Form,Button,Col,Jumbotron} from 'react-bootstrap';
import "./Login.css";



class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }

    validateForm(){
        return this.state.email.length>0 && this.state.password.length>0;
    }

    handleChange=event=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    handleSubmit=event=>{
        event.preventDefault();
    }

    render(){
        return(
          <div className="Login">
            <Form onSubmit={this.handleSubmit}>
          
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        autoFocus
                        
                        onChange={this.handleChange}
                        type="email" 
                        placeholder="Enter Email" />
                   
                </Form.Group>
            
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        autoFocus
                       
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
                <Button
                    block
                    disabled={!this.validateForm()} 
                    variant="primary"
                    type="submit">
                    Login
                </Button>
                </Form.Group>
                
                
               
               
            </Form>
            </div>
        )
           
        
    }
}

export default Login;