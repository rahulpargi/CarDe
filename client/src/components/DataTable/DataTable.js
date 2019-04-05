import React from 'react';
import {Table,Row,Col,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link } from 'react-router-dom'
import './DataTable.css';
import Search from '../Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const DataTable= (props)=>{
    return(
        <div className="container">
            <Search/>
            <div className="table-wrapper">
                <div className="table-title">
                {props.data.map(e=>console.log(e._id))}
                    <Row>
                        <Col className="col-sm-6">
                            <h2><b>Claim Reference Table</b></h2>
                        </Col>
                        <LinkContainer to='/create'>
                        <Col className="col-sm-6">
                            <Button className="btn btn-success"><FontAwesomeIcon icon="plus" /> New Claim</Button>
                        </Col>
                        </LinkContainer>
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
                    
                    {props.data.map((e)=>{
                        return(
                            <tr key={e._id}>
                                <td >
                                    <Link to={{
                                        pathname:`/profile/claim/${e._id}`,
                                        state:{
                                            data:e
                                        }
                                    }}>
                                        {e.claim_reference_no}
                                    </Link>
                                </td>
                                <td>1</td>
                                <td>60%</td>
                            </tr>
                        )
                    })}
                   
                    
                </tbody>
                </Table>
            </div>
        
            </div>
    );
}



export default DataTable;