import React from 'react';
import { Table, Row, Col,ProgressBar } from 'react-bootstrap'
import Axios from 'axios';




class ClaimTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgname: '',
      imgbytes: "",
      progress: '',
      predictionResult:""
    };
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imgname: 'ss',
        imgbytes: reader.result
      });
      let result1 = reader.result.split(',')[1];


      Axios.post('http://52.173.191.180:4000/Upload', { imgname: "test55.jpg", imagbytes: result1 }, {
        onUploadProgress: progressEvent => this.setState({ progress: Math.round((progressEvent.loaded / progressEvent.total * 100)) })
      })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.setState({ progress: '' });
            this.setState({predictionResult:res.data.prediction_result})
          }
        })


    }
    reader.readAsDataURL(file);
  }

  render() {


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
                            <input className="btn-file" type="file" onChange={this.handleInput} />

                  </div>
                  <ProgressBar animated now={this.state.progress} />
                </td>



              </tr>
              <tr>
                <td>Back</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="button" name="file" onClick={this.handleSubmit} />
                  </div>
                </td>

              </tr>
              <tr>
                <td>Right Side</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" />
                  </div>
                </td>

              </tr>
              <tr>
                <td>Left Side</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" />
                  </div>
                </td>

              </tr>
              <tr>
                <td>Front Wheel - Right</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" />
                  </div>
                </td>

              </tr>
              <tr>
                <td>Front Wheel - Left</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" />
                  </div>
                </td>

              </tr>
              <tr>
                <td>Back Wheel - Right</td>

                <td>
                  <div className="file btn btn-md btn-primary">
                    Upload
                            <input className="btn-file" type="file" name="file" />
                  </div>
                </td>

              </tr>

            </tbody>
          </Table>
        </div>

        </Col>
        <Col className="col-md-6">
            <ProgressBar now={this.state.progress}/>
            {JSON.stringify(this.state.predictionResult)}
        </Col>
      </Row>

        
       

      </div>
    );
  }
}



export default ClaimTable;