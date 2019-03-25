import React from 'react';
import {Table,Row,Col,Button} from 'react-bootstrap'
import './DataTable.css';
import Search from '../Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DataTable= (props)=>{
    return(
        <div className="container">
            <Search/>
            <div className="table-wrapper">
                <div className="table-title">
                    <Row>
                        <Col className="col-sm-6">
                            <h2><b>Claim Reference Table</b></h2>
                        </Col>
                        <Col className="col-sm-6">
                            <Button className="btn btn-success"><FontAwesomeIcon icon="plus" /> New Claim</Button>
                        </Col>
                    </Row>

                </div>
                <Table className="table table-striped table-hover">
        
                <thead>
                    <tr>
                    
                    <th>Reference Number</th>
                    <th>Image Count</th>
                    <th>Damage Density</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>ABA120</td>
                    <td>9.00</td>
                    <td>60%</td>
                    
                    </tr>
                    <tr>
                    <td>ABA120</td>
                    <td>9.00</td>
                    <td>60%</td>
                    </tr>
                    <tr>
                    <td>ABA120</td>
                    <td>9.00</td>
                    <td>60%</td>
                    </tr>
                    <tr>
                    <td>ABA120</td>
                    <td>9.00</td>
                    <td>60%</td>
                    </tr>
                    <tr>
                    <td>ABA120</td>
                    <td>9.00</td>
                    <td>60%</td>
                    </tr>
                    
                </tbody>
                </Table>
            </div>
        
            </div>
    );
}



export default DataTable;