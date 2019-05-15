import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap';

const h5 = {
    width:"200px",
    fontSize:'16px'
    

}
const Claims = (props)=>{
    console.log(props.info)
    return(
        <Row > 
            <Col className="col-md-2" >
                <h5 style={h5}>Total Claims Processed</h5>
                <h3 style={{color:"#283fb1"}}><b>{props.info.length}</b></h3>
            </Col>
            <Col className="col-md-2">
                <h5 style={h5}>Claims to  be  Processed</h5>
                <h3 style={{color:"#283fb1"}}><b>120</b></h3>
            </Col>
            <Col className="col-md-2">
                <h5 style={h5}>Estimated Cost</h5>
                <h3 style={{color:"#283fb1"}}><b>$75,000</b></h3>
            </Col>
            <Col className="col-md-2">
                <h5 style={h5}>Total Images Pending</h5>
                <h3 style={{color:"#283fb1"}}><b>120</b></h3>
            </Col>
            <Col className="col-md-2">
                <h5 style={h5}>Total Images Processed</h5>
                <h3 style={{color:"#283fb1"}}><b>150</b></h3>
            </Col>
            <Col className="col-md-2">
                <h5 style={h5}>Total Parts Identified</h5>
                <h3 style={{color:"#283fb1"}}><b>80%</b></h3>
            </Col>
     
        </Row>
    );
}


export default Claims;