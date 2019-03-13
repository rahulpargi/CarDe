import React from 'react';
import {Container,Row,Col,Card,FormControl,Button,Form} from 'react-bootstrap';
import './Search.css'

const Search =(props)=>{
   return(
    <Container fluid>
    <Row className="justify-content-center ">
        <Col className="col-12 col-md-10 col-lg-8 ">
        <Form>
            <Card className="card-sm pull-right">
                <Card.Body>
                    <Row className="no-gutters align-items-center">
                        <Col className="auto">
                            <  i class="fas fa-search h4 text-body"></i> 
                        </Col>
                        <Col>
                        <FormControl
                            placeholder="Search By Reference Number"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        </Col>
                        <Col>
                            <Button className="btn-md btn-success" type="submit">Search</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Form>
        </Col>
                    
               
    </Row>
</Container>
   );
    
  
}

export default Search;
