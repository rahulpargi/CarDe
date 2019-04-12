import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Cards.css'


const Cards = (props) =>{
    return(
        <Container fluid>
            <Row >
                <Col className="col-md-12">
                    <h2><b>Summary of Images Processed</b></h2>
                </Col>
                <Col className="col-md-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Total Claim Processed</b></h4>
                            <h5>{props.info.length}</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Claim's To Be Processed</b></h4>
                            <h5>120.00</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6" >
                    <div className="thumb-wrapper" >
                        <div className="thumb-content">
                            <h4><b>Total Images Pending</b></h4>
                            <h5>300.00</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6" >
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Estimate Percentage</b></h4>
                            <h5>60%</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Estimated Cost</b></h4>
                            <h5>$75,000.00</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6" >
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Total Loss Prediction</b></h4>
                            <h5>65%</h5>
                        </div>
                    </div>
                </Col>
                
                
                
                
                
            </Row>
            {/* <Row>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Total Claim Processed</b></h4>
                            <h5>200.00</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Claims To Be Processed</b></h4>
                            <h5>120.00</h5>
                        </div>
                    </div>
                </Col>
               
            </Row>
            <Row>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Total Images Pending</b></h4>
                            <h5>300.00</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Estimated Percentage</b></h4>
                            <h5>60%</h5>
                        </div>
                    </div>
                </Col>
               
            </Row>
            <Row>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Estimated Cost</b></h4>
                            <h5>$75,000.00</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Total Loss Prediction</b></h4>
                            <h5>65%</h5>
                        </div>
                    </div>
                </Col>
               
            </Row>
            */}
            
        </Container>
    )
}

export default Cards;