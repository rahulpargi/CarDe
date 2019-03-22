import React from 'react';
import {Table,Row,Col,Form} from 'react-bootstrap'
import Axios from 'axios';



class ClaimTable extends React.Component{
  state={
    data:''
  }
  
  handleInput=(e)=>{
    
    const data = new FormData();
    data.append('file',e.target.files[0]);
    this.setState({data:data})
    this.props.handleImage(data)
    
    //console.log(e.target.files[0])
    
    
    
    
    
    }
    render(){
     // this.props.handleImage(this.state.imageUrl);
      return(
        <div className="container">
          {console.log(this.state.data)}
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
                    
                    <th></th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Front</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input  className="btn-file" onChange={this.handleInput} type="file" name="file"/>
                      </div>
                    </td>
                   
                 
                    
                    </tr>
                    <tr>
                    <td>Back</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Right Side</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                   
                    </tr>
                    <tr>
                    <td>Left Side</td>
                    
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                   
                    </tr>
                    <tr>
                    <td>Front Wheel - Right</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Front Wheel - Left</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input  className="btn-file" type="file" name="file"/>
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Back Wheel - Right</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
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
}



export default ClaimTable;