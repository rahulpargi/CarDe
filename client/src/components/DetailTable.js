import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

class DetailTable extends Component{
    render(){
        return(
            <Table striped bordered hover>
            <thead>
              <tr>
                
                <th>Item</th>
                <th>Count</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td>Front</td>
                <td>1.00</td>
                
              </tr>
              <tr>
               
                <td>Back</td>
                <td>1.00</td>
                
              </tr>
              <tr>
                <td >Right Side</td>
                <td>1.00</td>
              
              </tr>
              <tr>
                <td >Left Side</td>
                <td>1.00</td>
               
              </tr>
              <tr>
                <td >Front Wheel - Right</td>
                <td>1.00</td>
               
              </tr>
              <tr>
                <td >Front Wheel - Left</td>
                <td>1.00</td>
                
              </tr>
              <tr>
                <td >Back Wheel - Right</td>
                <td>1.00</td>
                
              </tr>
              <tr>
                <td >Back Wheel - Left</td>
                <td>1.00</td>
                
              </tr>
              <tr>
                <td >Damage 1</td>
                <td>1.00</td>
                
              </tr>
              <tr>
                <td >Damage 2</td>
                <td>1.00</td>
               
              </tr>
              <tr>
                <td >Damage 3</td>
                <td>1.00</td>
               
              </tr>
              <tr>
                <td >Damage 4</td>
                <td>1.00</td>
                
              </tr>
              <tr>
                <td >Damage 5</td>
                <td>1.00</td>
                
              </tr>
            </tbody>
          </Table>  
        )
    }
}



export default DetailTable