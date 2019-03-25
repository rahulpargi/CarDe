import React from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import "./Register.css";
import axios from 'axios';


class Register extends React.Component{
    state={
        claim_adjustor_id: "",
        adjustorfirstname: "",
        adjustorlastname: "",
        adjustoremail: "",
        adjustorphone: "",
        admin: false,
        company_id: "",
        adjustor_username: "",
        adjustor_password: "",
        showAlert:false,
        alertMessage:""

        
    }
   

    handleChange=event=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    handleSubmit=event=>{
        event.preventDefault();
        const data = this.state;
        
        
        //Posting data
        axios.post('/api/register',data)
        .then(res=>{
           if(res.status === 200){
               this.props.history.push('/');
           }else{
               const error = new Error(res.error);
               throw error
           }
        })
        .catch(error=>{
            console.log(error.response.data);
            this.setState({alertMessage:error.response.data});
            this.setState({showAlert:!this.state.showAlert})
        });
        
        
    }
    render(){
        let alert=( 
            <Alert dismissible variant={"danger"}>
                {this.state.alertMessage}
            </Alert>
          );
        
        return(
            <div className="login-form">
            
            <Form onSubmit={this.handleSubmit}>
            {this.state.showAlert && alert}
            <h2 >Register</h2>
            <Form.Group controlId="claim_adjustor_id" >
                <Form.Label>Adjustor ID</Form.Label>
                <Form.Control 
                    required
                    autoFocus
                    onChange={this.handleChange}
                    
                   
                    type="text" 
                    placeholder="Enter Adjustor ID" />
               
            </Form.Group>
            <Form.Group controlId="adjustorfirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    required
                    
                    onChange={this.handleChange} 
                   
                    type="text" 
                    placeholder="Enter Adjustor First Name" />
               
            </Form.Group>
            <Form.Group controlId="adjustorlastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    
                    required
                    onChange={this.handleChange}
                   
                    type="text" 
                    placeholder="Enter Adjustor Last Name" />
               
            </Form.Group>
            <Form.Group controlId="adjustoremail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    
                    required
                    onChange={this.handleChange}
                   
                    type="email" 
                    placeholder="Enter Email" />
               
            </Form.Group>
            <Form.Group controlId="adjustorphone">
                <Form.Label>Phone No</Form.Label>
                <Form.Control 
                    
                    required
                    onChange={this.handleChange}
                   
                    type="text" 
                    placeholder="Enter Phone No" />
               
            </Form.Group>
            <Form.Group controlId="company_id">
                <Form.Label>Company ID</Form.Label>
                <Form.Control 
                    
                    required
                    onChange={this.handleChange}
                   
                    type="text" 
                    placeholder="Enter Company ID" />
               
            </Form.Group>
            <Form.Group controlId="adjustor_username">
                <Form.Label>UserName</Form.Label>
                <Form.Control 
                    
                    required
                    onChange={this.handleChange}
                  
                    type="text" 
                    placeholder="UserName" />
            </Form.Group>
        
            <Form.Group controlId="adjustor_password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    
                    required
                    onChange={this.handleChange}
                  
                    type="password" 
                    placeholder="Password" />
            </Form.Group>
            <fieldset>
            <Form.Group>
           
            <Form.Label>Admin ?</Form.Label>
            
           
            <Form.Check
                type="checkbox"
                label="Yes"
                name="yes"
                id="yes"
                value={this.state.admin}
                onChange={()=>this.setState({admin:!this.state.admin})}
                
            />
            
            
            </Form.Group>
            </fieldset>
            
            
           
        
            
            
            <Button
                block
               
                variant="primary"
                type="submit">
                Create Account
            </Button>
           
           
          
            
           
           
        </Form>
    
        </div>
        
        );
    }
}



export default  Register;