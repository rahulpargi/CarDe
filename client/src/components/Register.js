import React from 'react';
import {Form,Button} from 'react-bootstrap';
import "./Login.css";


class Register extends React.Component{
    state={
        "claim_adjustor_id": "",
        "adjustorfirstname": "",
        "adjustorlastname": "",
        "adjustoremail": "",
        "adjustorphone": "",
        "admin": "",
        "company_id": "",
        "adjustor_username": "",
        "adjustor_password": "",

        
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
                type="radio"
                label="Yes"
                name="admin_yes"
                id="admin_yes"
            />
            <Form.Check
                type="radio"
                label="No"
                name="admin_no"
                id="admin_no"
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
        {JSON.stringify(this.state)}
        </div>
        
        );
    }
}



export default  Register;