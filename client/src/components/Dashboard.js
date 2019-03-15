import React,{Component} from 'react';
import {Row,Col,Container,Image,Form} from 'react-bootstrap';
import Layout from './Layout'
import ViewTable from './ViewTable';
import DetailTable from './DetailTable';
import Chart from './Chart';
import axios from 'axios';
import Logo from '../assets/Front.jpg';
import './Dashboard.css'



class Dashboard extends Component{
    state={
        message:'Loading'
    }
    componentDidMount(){
        fetch('/api/view')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render(){
       
        return(
           <Layout>
               <Container fluid>
                    <Row>
                        <Col className="col-md-3 space">
                            <Chart/>
                        </Col>
                        <Col className="col-md-3 space ">
                        <Form.Group controlId="total_parts" >
                            <Form.Label>Total Number Of Parts Scanned</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                diabled
                                value="11.00"
                            
                                type="text" 
                                placeholder="11.00" />
                        
                        </Form.Group>
                        <Form.Group controlId="total_images_scanned" >
                            <Form.Label>CTotal Images Scanned</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                
                                value="13.00"
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        <Form.Group controlId="estimate_percentage" >
                            <Form.Label>Estimate Percentage</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                value="51%"
                            
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        <Form.Group controlId="Estimated Cost" >
                            <Form.Label>Estimated Cost</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                value="$1200.00"
                            
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        <Form.Group controlId="Total Loss Prediction" >
                            <Form.Label>Total Loss Prediction</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                value="85%"
                            
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        </Col>
                        <Col className="col-md-6">
                            <ViewTable/>
                        </Col>
                       
                    </Row>
                  
                    <Row>
                        <Col>
                            <DetailTable/>
                        </Col>
                        <Col>
                            <Image src={Logo} className="images"/>
                        </Col>
                       
                    </Row>
                </Container>
            </Layout>
        )
    }
}



export default Dashboard;