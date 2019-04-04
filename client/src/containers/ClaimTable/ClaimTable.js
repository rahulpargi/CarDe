import React from 'react';
import { Table, Row, Col,ProgressBar  } from 'react-bootstrap';
import Axios from 'axios';
import Loader from '../../components/Spinner/Loader';
import uniqid from 'uniqid'

class ClaimTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      
      progress: '',
      predictionResult:"",
      showSpinner:false
    };
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput = (e) => {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy =date.getFullYear();
    date = mm+'/'+dd+'/'+yyyy;


    //Image
    
    var imageName = e.target.files[0].name
    var selectedImage = e.target.files[0]
    var imageType=e.target.files[0].name.split('.')[1];
    this.props.handleImage(selectedImage,imageName,imageType,date);


    
  }

  render() {
    let loader = <Loader/>


    return (
      <div className="container">
      <Row>
       
        
        <Col className="col-md-6">
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
                            <input className="btn-file" type="file" onChange={this.handleInput} name="selectedImage" accept="image/*"/>

                  </div>
                 
                </td>



              </tr>
              <tr>
                <td>Back</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file"  onClick={this.handleInput}  accept="image/*"/>
                  </div>
                </td>

              </tr>
              <tr>
                <td>Right Side</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file"  accept="image/*"/>
                  </div>
                </td>

              </tr>
              <tr>
                <td>Left Side</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file"  accept="image/*"/>
                  </div>
                </td>

              </tr>
              <tr>
                <td>Front Wheel - Right</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" accept="image/*" />
                  </div>
                </td>

              </tr>
              <tr>
                <td>Front Wheel - Left</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file"  accept="image/*"/>
                  </div>
                </td>

              </tr>
              <tr>
                <td>Back Wheel - Right</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" accept="image/*" />
                  </div>
                </td>

              </tr>

            </tbody>
          </Table>
        </div>

        </Col>
        <Col className="col-md-6">
            <ProgressBar animated now={this.state.progress}/>
            <Row>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Severity</b></h4>
                              {this.state.showSpinner && loader}
                            <h5>{this.state.predictionResult.assessment}</h5>
                            
                        </div>
                    </div>
                </Col>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Damaged Parts</b></h4>
                            {this.state.showSpinner && loader}
                            <h5>{this.state.predictionResult.damage_affected_parts}</h5>
                            
                        </div>
                    </div>
                </Col>
                <Col className="col-sm-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Accuracy</b></h4>
                            {this.state.showSpinner && loader}
                            <h5>{this.state.predictionResult.damage_affected_parts}</h5>
                            
                        </div>
                    </div>
                </Col>
               
            </Row>    
        </Col>
      </Row>

        
       

      </div>
    );
  }
}



export default ClaimTable;