import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap';

const h5 = {
    width:"200px",
    fontSize:'13px'
    

}
const Claims_Dashboard = (props)=>{
    console.log(props.info)
    return(
        <Row > 
            <Col className="col-sm-2" >
                <h5 style={h5}>Estimated Percentage</h5>
                <h3 style={{color:"#283fb1",fontSize:'20px'}}><b>70%</b></h3>
            </Col>
            <Col className="col-sm-2">
                <h5 style={h5}>Total Loss Prediction</h5>
                <h3 style={{color:"#283fb1",fontSize:'20px'}}><b>60%</b></h3>
            </Col>
            <Col className="col-sm-2">
                <h5 style={h5}>Total Number of Parts Scanned</h5>
                <h3 style={{color:"#283fb1",fontSize:'20px'}}><b>11</b></h3>
            </Col>
            <Col className="col-sm-2">
                <h5 style={h5}>Total Images Scanned</h5>
                <h3 style={{color:"#283fb1",fontSize:'20px'}}><b>13</b></h3>
            </Col>
            <Col className="col-sm-2">
                <h5 style={h5}>Estimated Cost</h5>
                <h3 style={{color:"#283fb1",fontSize:'20px'}}><b>$75,000.00</b></h3>
            </Col>
            <Col className="col-sm-2">
                <h5 style={h5}>Probability of Prediction</h5>
                <h3 style={{color:"#283fb1",fontSize:'20px'}}><b>80%</b></h3>
            </Col>
     
        </Row>
    );
}


export default Claims_Dashboard;