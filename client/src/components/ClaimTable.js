import React from 'react';
import {Table,Row,Col} from 'react-bootstrap'

import Search from './Search'
import './ClaimTable.css'

const ClaimTable= (props)=>{
    return(
        <div className="container">
          
            <div className="table-wrapper">
                <div className="table-title">
                    <Row>
                        <Col className="col-sm-6">
                            <h2><b>Upload Images</b></h2>
                        </Col>
                        
                    </Row>

                </div>
                <Table className="table table-striped table-hover">
        
                <thead>
                    <tr>
                    
                    <th>ITEM</th>
                    <th>COUNT</th>
                    <th></th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Front</td>
                    <td>9.00</td>
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input  className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                   
                 
                    
                    </tr>
                    <tr>
                    <td>Back</td>
                    <td>9.00</td>
                    <td>
                      <div class="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Right Side</td>
                    <td>9.00</td>
                    <td>
                      <div class="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                   
                    </tr>
                    <tr>
                    <td>Left Side</td>
                    <td>9.00</td>
                    <td>
                      <div class="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                   
                    </tr>
                    <tr>
                    <td>Front Wheel - Right</td>
                    <td>9.00</td>
                    <td>
                      <div class="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Front Wheel - Left</td>
                    <td>9.00</td>
                    <td>
                      <div class="file btn btn-md btn-primary">
                            Upload
                            <input  className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Back Wheel - Right</td>
                    <td>9.00</td>
                    <td>
                      <div class="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    
                </tbody>
                </Table>
            </div>
        
            </div>
    );
}



export default ClaimTable;