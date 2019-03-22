import React,{Component} from 'react';
import Layout from './Layout';
import {Row,Col,Container,Form,Image,Button} from 'react-bootstrap';
import ClaimTable from './ClaimTable'

import Front from '../assets/Front.jpg'
import './Button.css'
import Axios from 'axios';




class CreateClaim extends Component{
    state={
        message:{},
        imageUrl:''
    }
    componentDidMount(){
        Axios.get('/api/create')
        .then(res=>{
            this.setState({message:res.data});
            console.log(res.data)
            
            
        })
    }
    handleImages=(image)=>{
        console.log(image)
        this.setState({imageUrl:image})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        fetch('http://localhost:5000/upload', {
        method: 'POST',
        mode:'cors',
        body: this.state.imageUrl,
        }).then((response) => {
        response.json().then((body) => {
            console.log(body)
            //this.setState({ imageURL: `http://localhost:5000/${body.file}` });
        });
        });
    }
    render(){
        {JSON.stringify(this.state.imageUrl)}
        return(
            
            <Layout>
                <Container fluid>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                     
                        <Col className="col-md-12">
                            <h2><b>Claim Reference Number:{this.state.message.claim_adjustor_id}</b></h2>
                        </Col>
                        <Col className="col-md-6">
                        <Form.Group controlId="reference_number" >
                            <Form.Label>Claims Reference No</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                
                            
                                type="text" 
                                placeholder="Enter Reference Number" />
                        
                        </Form.Group>
                        <Form.Group controlId="images_uploaded" >
                            <Form.Label>Images Uploaded</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                
                            
                                type="text" 
                                placeholder="5" />
                             
                        
                        </Form.Group>
                        <Form.Group controlId="images_missing" >
                            <Form.Label>Images Missing</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                
                            
                                type="text" 
                                placeholder="4.00" />
                             
                        
                        </Form.Group>
                        <Form.Group controlId="analysis_Status" >
                            <Form.Label>Analysis Status</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                
                            
                                type="text" 
                                placeholder="Not Started" />
                             
                        
                        </Form.Group>
                        </Col>
                        <Col className="col-md-6">
                            <Form.Group controlId="make" >
                                <Form.Label>Make</Form.Label>
                                <Form.Control 
                                    required
                                    autoFocus
                                    onChange={this.handleChange}
                                    
                                
                                    type="text" 
                                    placeholder="Enter Make" />
                                
                            
                            </Form.Group>
                            <Form.Group controlId="year" >
                                <Form.Label>Year</Form.Label>
                                <Form.Control 
                                    required
                                    autoFocus
                                    onChange={this.handleChange}
                                    
                                
                                    type="text" 
                                    placeholder="Enter Car Year" />
                                
                            
                            </Form.Group>
                            <Form.Group controlId="vin_number" >
                                <Form.Label>Year</Form.Label>
                                <Form.Control 
                                    required
                                    autoFocus
                                    onChange={this.handleChange}
                                    
                                
                                    type="text" 
                                    placeholder="Enter VIN Number" />
                                
                            
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Button
                                    
                                    className="btn"
                                    variant="primary"
                                    type="submit"
                                 
                                   
                                    >
                                Run Analysis
                                
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col><ClaimTable handleImage={this.handleImages}/></Col>
                        <Col><Image className="images" src={Front} fluid/></Col>
                    </Row>
                </Form>
                </Container>
                
            </Layout>
        )
    }
} 


export default  CreateClaim;