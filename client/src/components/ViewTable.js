import React,{Component} from 'react';
import {Table} from 'react-bootstrap'





class ViewTable extends Component{
    render(){
        return(
            <Table striped bordered hover>
            <thead>
              <tr>
                
                <th>Item</th>
                <th>Count</th>
                <th>Damage Intensity</th>
                <th>Probability</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bonet</td>
                <td>1.00</td>
                <td>60%</td>
                <td>20%</td>
                <td>12%</td>
              </tr>
              <tr>
               
                <td>Trunk</td>
                <td>1.00</td>
                <td>70%</td>
                <td>30%</td>
                <td>24%</td>
              </tr>
              <tr>
              <td>Windshield</td>
                <td>1.00</td>
                <td>80%</td>
                <td>30%</td>
                <td>22%</td>
              </tr>
              <tr>
              <td>Item</td>
                <td>1.00</td>
                <td>60%</td>
                <td>20%</td>
                <td>12%</td>
              </tr>
              <tr>
              <td>Item</td>
                <td>1.00</td>
                <td>60%</td>
                <td>20%</td>
                <td>12%</td>
              </tr>
             
            </tbody>
          </Table>  
        )
    }
}



export default ViewTable