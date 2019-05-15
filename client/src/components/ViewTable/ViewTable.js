import React from 'react';
import {Table,Row,Col} from 'react-bootstrap';



import './ViewTable.css'

const DetailTable= (props)=>{
    return(
        <div className="container">
          
            <div className="table-wrapper">
                
                <Table className="table table-striped table-hover">
        
                <thead style={{background:"#283fb1"}}>
                    <tr style={{color:"white"}}>
                    
                    <th>ITEM</th>
                    <th>COUNT</th>
                    <th>DAMAGE INTENSITY</th>
                    <th>PROBABILITY</th>
                    <th>VALUE</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Bonet</td>
                    <td>01</td>
                    <td>60%</td>
                    <td>20%</td>
                    <td>12%</td>
                    
                   
                 
                    
                    </tr>
                    <tr>
                    <td>WindShield</td>
                    <td>01</td>
                    <td>70%</td>
                    <td>90%</td>
                    <td>60%</td>
                    
                    
                    </tr>
                    <tr>
                    <td>Trunk</td>
                    <td>01</td>
                    <td>80%</td>
                    <td>20%</td>
                    <td>70%</td>
                    
                   
                    </tr>
                    
                   
                    
                </tbody>
                </Table>
            </div>
        
            </div>
    );
}



export default DetailTable;