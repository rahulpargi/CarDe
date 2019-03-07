import React,{Component} from 'react';
import {Row,Col,Button,Card,ListGroup,Container,InputGroup,FormControl} from 'react-bootstrap';
import DataTable from './Table';
import {Route,Link} from 'react-router-dom';

import Layout from './Layout'





class Profile extends Component{
    render(){
        return(
            <Layout>
            <div>
            <Container fluid>
              
          
               
              <Row>
                    <Col>
                        <h3>Summary of Images Processed</h3> 
                    </Col>
                    <Col >
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search By Reference Number"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                         
                   
                </Row>
                
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
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
                            </Card>

                    </Col>
                    <Col>
                        <h3>Claims Reference Table</h3>
                        <DataTable/>
                        <Button
                            block
                            variant="primary"
                            size="sm"
                        >Next</Button>
                        <Link to='/create'><Button
                            block
                            variant="primary"
                            size="sm"
                        > New Claim</Button></Link>
                       
                    </Col>
                    
                  
                   
                </Row>
              
               

               
          </Container>
         
          </div>
          </Layout>
        );

    }
}


export default Profile;