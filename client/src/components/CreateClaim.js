import React,{Component} from 'react';
import Layout from './Layout';
import {Row,Col,Container,Form,Image,Button} from 'react-bootstrap';
import ClaimTable from './ClaimTable'

import Front from '../assets/Front.jpg'
import './Button.css'




class CreateClaim extends Component{
    state={
        message:'Loading'
    }
    componentDidMount(){
        fetch('/api/create')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render(){
        return(
            
            <Layout>
                <Container fluid>
                <Form>
                    <Row>
                        <Col className="col-md-12">
                            <h2><b>Claim Reference Number: ABA120</b></h2>
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
                            <Form.Label>Analysis Statue</Form.Label>
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
                        <Col><ClaimTable/></Col>
                        <Col><Image className="images" src={Front} fluid/></Col>
                    </Row>
                </Form>
                </Container>
                
            </Layout>
        )
    }
} 


export default  CreateClaim;