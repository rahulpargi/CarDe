import React from 'react';
import {Table,Row,Col} from 'react-bootstrap';
import ModalImage from 'react-modal-image'


import './DetailTable.css'

const DetailTable= (props)=>{
    const showModal = useState(false);
    return(
        <div className="container">
          <Row>
              <Col className="col-sm-6">
            <div className="table-wrapper">
                <div className="table-title">
                    <Row>
                        <Col className="col-sm-6">
                            <h2><b>Images Processed</b></h2>
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
                    
                   
                 
                    
                    </tr>
                    <tr>
                    <td>Back</td>
                    <td>9.00</td>
                    
                    
                    </tr>
                    <tr>
                    <td>Right Side</td>
                    <td>9.00</td>
                    
                   
                    </tr>
                    <tr>
                    <td>Left Side</td>
                    <td>9.00</td>
                   
                   
                    </tr>
                    <tr>
                    <td>Front Wheel - Right</td>
                    <td>9.00</td>
                   
                    
                    </tr>
                    <tr>
                    <td>Front Wheel - Left</td>
                    <td>9.00</td>
                    
                    
                    </tr>
                    <tr>
                    <td>Back Wheel - Right</td>
                    <td>9.00</td>
                   
                    
                    </tr>
                    
                </tbody>
                </Table>
            </div>
            </Col>
            <Col className="col-sm-6">
            <ModalImage
                    small={`../../`+props.imagePath}
                    large={`../../`+props.imagePath}
                    alt="Hello World!"
                />
        
            </Col>
            </Row>

           
            </div>
    );
}



export default DetailTable;