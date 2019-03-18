import React from 'react';
import {Table,Row,Col} from 'react-bootstrap'


import './ClaimTable.css'


class ClaimTable extends React.Component{
  constructor(props){
    super(props);
    this.myref = React.createRef();
  }

state={
  image_front:null,
  image_back:null,
  image_right_side:null,
  image_left_side:null,
  image_front_wheel_right:null,
  image_front_wheel_left:null,
  image_back_wheel_right:null



}



handleChange = (e)=>{
  
  console.log(this.googleInput.name)
 
  this.setState({[e.target.name]:e.target.files[0]});
  


}

  render(){
    this.props.handleImages(this.state)
    //console.log(this.myref.current.value)
    return(
      <div className="container">
      {JSON.stringify(this.state)}
        
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
                            <input  className="btn-file" type="file" name="image_front"  ref={(googleInput) => { this.googleInput = googleInput }} onChange={this.handleChange}/>
                      </div>
                    </td>
                  
                
                    
                    </tr>
                    <tr>
                    <td>Back</td>
                    
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file"  name="image_back" onChange={this.handleChange} />
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Right Side</td>
                    
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file"  name="image_right_side" onChange={this.handleChange} />
                      </div>
                    </td>
                  
                    </tr>
                    <tr>
                    <td>Left Side</td>
                    
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file"  name="image_left_side" onChange={this.handleChange} />
                      </div>
                    </td>
                  
                    </tr>
                    <tr>
                    <td>Front Wheel - Right</td>
                    
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file"  name="image_front_wheel_right" onChange={this.handleChange} />
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Front Wheel - Left</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input  className="btn-file" type="file"  name="image_front_wheel_left" onChange={this.handleChange}  />
                      </div>
                    </td>
                    
                    </tr>
                    <tr>
                    <td>Back Wheel - Right</td>
                   
                    <td>
                      <div className="file btn btn-md btn-primary">
                            Upload
                            <input className="btn-file" type="file"  name="image_back_wheel_right" onChange={this.handleChange} />
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