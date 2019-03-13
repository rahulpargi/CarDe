import React from 'react';
import {Container,Row,Col, Card} from 'react-bootstrap';
import './Cards.css'

const Cards = (props) =>{
    return(
        <Container fluid>
            <Row >
                <Col className="col-md-12">
                    <h2><b>Summary of Images Processed</b></h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4>Total Claim Processed</h4>
                        </div>
                    </div>
                </Col>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4>Total Claim Processed</h4>
                        </div>
                    </div>
                </Col>
                
            </Row>
           
            
        </Container>
    )
}

export default Cards;