import React,{Component} from 'react';
import {Row,Col,Button,Card,ListGroup,Container,InputGroup,FormControl} from 'react-bootstrap';
import DataTable from './Table';
import Search from './Search';
import Cards from './Cards'

import Layout from './Layout'
import axios from 'axios';





class Profile extends Component{
    state={
        message:'Loading'
    }
    componentDidMount(){
        axios.get('/api/profile')
        
        .then(res => this.setState({message: res.data}));
    }
    render(){
        return(
            <Layout>
            <div>
            <Container fluid>
           
                
              
                        {/* <Card style={{ width: '18rem' }}>
                                <Card.Header>Total Claims Processed</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>200.00</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>Claims To Be Processed</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>120.00</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>Total Images Pending</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>300.00</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>Estimate Percentage</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>60%</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>Estimate Cost</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>$75,000.00</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>Total Loss Prediction</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>65%</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card> */}
                            <Row>

                                <Col><Cards/></Col>
                                <Col> <DataTable/></Col>
                            </Row> 

                   
                    
                      
                    
                    
                  
                   
             
               

               
          </Container>
         
          </div>
          </Layout>
        );

    }
}


export default Profile;