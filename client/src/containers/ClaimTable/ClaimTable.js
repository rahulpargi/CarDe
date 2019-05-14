import React from "react";
import { Table, Row, Col, ProgressBar } from "react-bootstrap";
import Axios from "axios";
import Loader from "../../components/Spinner/Loader";
import uniqid from "uniqid";

class ClaimTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "",
      predictionResult: "",
      showSpinner: false,
      file:null
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = e => {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    date = mm + "/" + dd + "/" + yyyy;

    //Image

    var imageName = e.target.files[0].name;
    var selectedImage = e.target.files[0];
    var imageType = e.target.files[0].name.split(".")[1];
    var image = URL.createObjectURL(e.target.files[0])
    this.setState({file:URL.createObjectURL(e.target.files[0])});
    this.props.handleImage(selectedImage, imageName, imageType, date,image);
  };

  render() {
    let loader = <Loader />;

    return (
      <div className="container">
        <Row>
          <Col className="col-md-12">
            <div className="file btn btn-md btn-primary" style={{width:"120px"}}>
              Upload
              <input
                className="btn-file"
                type="file"
                onChange={this.handleInput}
                name="selectedImage"
                accept="image/*"
                
              />
            </div>
            {/* <img src={this.state.file}/> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ClaimTable;
