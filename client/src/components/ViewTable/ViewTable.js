import React from 'react';
import {Table,Row,Col} from 'react-bootstrap'


import './ViewTable.css'

const DetailTable= (props)=>{
    return(
        <div className="container">
          
            <div className="table-wrapper">
                <div className="table-title">
                    <Row>
                        <Col className="col-sm-6">
                            <h2><b>Estimated Parts</b></h2>
                        </Col>
                        
                    </Row>

                </div>
                <Table className="table table-striped table-hover">
        
                <thead>
                    <tr>
                    
                    <th>ITEM</th>
                    <th>COUNT</th>
                    <th>DAMAGE INTENSITY</th>
                    <th>PROBABILITY</th>
                    <th>VALUE</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Front</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    
                   
                 
                    
                    </tr>
                    <tr>
                    <td>Back</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    
                    
                    </tr>
                    <tr>
                    <td>Right Side</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    
                   
                    </tr>
                    <tr>
                    <td>Left Side</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                   
                   
                    </tr>
                    <tr>
                    <td>Front Wheel - Right</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                   
                    
                    </tr>
                    <tr>
                    <td>Front Wheel - Left</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    
                    
                    </tr>
                    <tr>
                    <td>Back Wheel - Right</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                    <td>9.00</td>
                   
                    
                    </tr>
                    
                </tbody>
                </Table>
            </div>
        
            </div>
    );
}



export default DetailTable;