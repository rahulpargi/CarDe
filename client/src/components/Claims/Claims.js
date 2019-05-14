import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap';

const h5 = {
    width:"220px"

}
const Claims = (props)=>{
    console.log(props.info)
    return(
        <Row > 
            <Col >
                <h5 style={h5}>Total Claims Processed</h5>
                <h3 style={{color:"#283fb1"}}><b>{props.info.length}</b></h3>
            </Col>
            <Col>
                <h5 style={h5}>Claims to  be  Processed</h5>
                <h3 style={{color:"#283fb1"}}><b>120</b></h3>
            </Col>
            <Col>
                <h5 style={h5}>Estimated Cost</h5>
                <h3 style={{color:"#283fb1"}}><b>$75,000</b></h3>
            </Col>
            <Col>
                <h5 style={h5}>Total Images Pending</h5>
                <h3 style={{color:"#283fb1"}}><b>120</b></h3>
            </Col>
     
        </Row>
    );
}


export default Claims;