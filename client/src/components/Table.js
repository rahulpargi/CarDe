import React from 'react';
import {Table} from 'react-bootstrap'


const DataTable= (props)=>{
    return(
        <Table striped bordered hover>
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
                
            </tbody>
            </Table>
    );
}



export default DataTable;