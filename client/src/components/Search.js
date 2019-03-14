import React from 'react';
import {Container,Row,Col,Card,FormControl,Button,Form} from 'react-bootstrap';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search =(props)=>{
   return(
  
    
  
    <Row className="row justify-content-end">
        <Col className="col-12 col-md-10 col-lg-8">
            <Form className="card card-sm">
                <Card.Body className="card-body row no-gutters align-items-center">
                    <Col className="col-auto">
                        <FontAwesomeIcon icon="search" text-body/>
                    </Col>
                
                    <Col className="col">
                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Enter Reference Number"/>
                    </Col>
                
                    <Col className="col-auto">
                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                    </Col>
                </Card.Body>
            </Form>
       
        </Col>  

</Row>



   );
    
  
}

export default Search;
