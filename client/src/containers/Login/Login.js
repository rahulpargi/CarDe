import React from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios'
import "./Login.css";




class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            adjustoremail: '',
            adjustor_password: '',
            showAlert:false,
            alertMessage:'',
            isLoading:false
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
        this.setState({isLoading:true})
        const data=this.state;
        axios.post('/api/authenticate',data)
        .then(res=>{
           if(res.status === 200){
               this.setState({isLoading:false})
               this.props.history.push('/profile');
           }else{
              
               const error = new Error(res.error);
               throw error;
               
           }
        })
        .catch(error=>{
            this.setState({isLoading:false})
            console.log(error.response.data.error);
            this.setState({alertMessage:error.response.data.error});
            this.setState({showAlert:!this.state.showAlert})
        });
    }

    render(){
        const { isLoading } = this.state;
        
        let alert =(
            <Alert dismissible variant="danger">
                <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
                
            </Alert>
        )
        return(
          <div className="login-form" >
           
            <Form onSubmit={this.handleSubmit}>
                {this.state.showAlert && alert}
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
                <Button
                    block
                    disabled={!this.validateForm()} 
                    onClick={!isLoading ? this.handleSubmit : null}
                    variant="primary"
                    type="submit">
                   {isLoading ? 'Loading…' : 'Login'}
                </Button>
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                <LinkContainer to="/register">
                    <Button
                        block
                        variant="primary"
                        type="submit">
                        Register
                   </Button>
                </LinkContainer>
                </Form.Group>
               
                
               
               
            </Form>
            </div>
        )
           
        
    }
}

export default Login;