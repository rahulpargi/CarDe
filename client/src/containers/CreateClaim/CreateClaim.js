import React, { Component } from "react";
import Layout from "../../hoc/Layout/Layout";
import { Row, Col, Container, Form, Image, Button } from "react-bootstrap";
import ClaimTable from "../ClaimTable/ClaimTable";
import "./Button.css";
import '../../components/Cards/Cards.css'
import Axios from "axios";
import LoadingOverlay from "react-loading-overlay";

class CreateClaim extends Component {
  state = {
    message: {},
    claim_reference_no: "",
    vin_number: "",
    make: "",
    year: "",
    image_name: "",
    image_type: "",
    selectedImage: "",
    date_uploaded: "",
    damaged_parts: "",
    severity_of_damage: "",
    accuracy: "89",
    isActive: false,
    disabled: false,
    claimadjustor: "",
    image:null
  };

  componentDidMount() {
    Axios.get("/api/create").then(res => {
      this.setState({ claimadjustor: res.data.user1 });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleImages = (selectedImage, imageName, imageType, date,image) => {
      console.log(selectedImage,imageName);
    this.setState({
      selectedImage: selectedImage,
      image_name: imageName,
      image_type: imageType,
      date_uploaded: date,
      image:image
    });
  };
  handleSubmit = event => {
    this.setState({ isActive: !this.state.isActive });
    const {
      selectedImage,
      image_name,
      image_type,
      date_uploaded,
      claim_reference_no,
      vin_number,
      make,
      damaged_parts,
      severity_of_damage,
      accuracy,
      year
    } = this.state;
    event.preventDefault();
    let formData = new FormData();
    formData.append("selectedImage", selectedImage);
    formData.append("image_name", image_name);
    formData.append("image_type", image_type);
    formData.append("date_uploaded", date_uploaded);
    formData.append("claim_reference_no", claim_reference_no);
    formData.append("vin_number", vin_number);
    formData.append("make", make);
    formData.append("damaged_parts", damaged_parts);
    formData.append("severity_of_damage", severity_of_damage);
    formData.append("accuracy", accuracy);
    formData.append("year", year);
    Axios.post("/api/create", formData)
      .then(res => {
        this.setState({
          damaged_parts: res.data.damaged_parts,
          severity_of_damage: res.data.severity_of_damage,
          accuracy: res.data.accuracy
        });
        this.setState({
          isActive: !this.state.isActive,
          disabled: !this.state.disabled
        });
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  render() {
    const style = {
        color: "#000",
        fontSize: "22px",
        fontWeight: "300",
        textTransform: "capitalize",
        position: "relative"
      };

      let image = (
                    <div >
                        <Image src={this.state.image} style={{width:"300", height:"200px"}}/>
                    
                        <h5 style={{fontSize:"17px",textAlign:"center"}}>Image Name: {this.state.image_name}</h5>
                        
                    </div>
      );
    return (
      <LoadingOverlay
        active={this.state.isActive}
        spinner
        text="Please Wait  We Are Processing Your Request"
      >
        <Layout>
          <Container>
            <Form onSubmit={this.handleSubmit} method="POST">
              <Row>
               
                {/* <Col className="col-md-6">
                  <Form.Group controlId="claim_reference_no">
                    <Form.Label>Claims Reference No</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      type="text"
                      disabled={this.state.disabled}
                      placeholder="Enter Reference Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="images_uploaded">
                    <Form.Label>Images Uploaded</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      disabled
                      type="text"
                      placeholder="5"
                    />
                  </Form.Group>
                  <Form.Group controlId="images_missing">
                    <Form.Label>Images Missing</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      disabled
                      type="text"
                      placeholder="4.00"
                    />
                  </Form.Group>
                </Col>
                <Col className="col-md-6">
                  <Form.Group controlId="make">
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      disabled={this.state.disabled}
                      type="text"
                      placeholder="Enter Make"
                    />
                  </Form.Group>
                  <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      disabled={this.state.disabled}
                      type="text"
                      placeholder="Enter Car Year"
                    />
                  </Form.Group>
                  <Form.Group controlId="vin_number">
                    <Form.Label>VIN Number</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      disabled={this.state.disabled}
                      type="text"
                      placeholder="Enter VIN Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Button
                      disabled={this.state.disabled}
                      className="btn"
                      variant="primary"
                      type="submit"
                    >
                      Run Analysis
                    </Button>
                  </Form.Group>
                </Col> */}
              </Row>
              <Row style={{ marginTop: "50px" }} >
                <Col>
                  <h3 style={style}>
                    <b>Create Claims</b>
                  </h3>
                  <hr style={{ borderTop: " 1px solid black" }} />
                </Col>
              </Row>
              <Row>
                <Col className="col-md-3">
                  <Form.Group controlId="claim_reference_no">
                    <Form.Label>Claims Reference No</Form.Label>
                    <Form.Control
                      required
                      autoFocus
                      onChange={this.handleChange}
                      type="text"
                      disabled={this.state.disabled}
                      placeholder="Enter Reference Number"
                    />
                  </Form.Group>
                </Col>
                <Col className="col-md-3">
                  <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      required
                      
                      onChange={this.handleChange}
                      disabled={this.state.disabled}
                      type="text"
                      placeholder="Enter Car Year"
                    />
                  </Form.Group>
                </Col>
                <Col className="col-md-3">
                  <Form.Group controlId="make">
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                      required
                      
                      onChange={this.handleChange}
                      disabled={this.state.disabled}
                      type="text"
                      placeholder="Enter Make"
                    />
                  </Form.Group>
                </Col>
                
                <Col className="col-md-3">
                  <Form.Group controlId="vin_number">
                    <Form.Label>VIN Number</Form.Label>
                    <Form.Control
                      required
                      
                      onChange={this.handleChange}
                      disabled={this.state.disabled}
                      type="text"
                      placeholder="Enter VIN Number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col className="col-md-6">
                  <h3 style={style}>
                    <b>Upload Image</b>
                  </h3>
                  <hr style={{ borderTop: " 1px solid black" }} />
                </Col>
                <Col className="col-md-6">
                  <h3 style={style}>
                    <b>Images Uploaded</b>
                  </h3>
                  <hr style={{ borderTop: " 1px solid black" }} />
                </Col>
              </Row>
              <Row  style={{textAlign:'center'}} >
                <Col className="col-md-6" style={{margin:"auto"}}>
                  <ClaimTable
                    handleImage={this.handleImages}
                    severity={this.state.severity_of_damage}
                    damage={this.state.damaged_parts}
                    accuracy={this.state.accuracy}
                  />
                   <Form.Group controlId="formBasicChecbox" style={{marginTop:"15px"}}>
                    <Button
                      disabled={this.state.disabled}
                      className="btn"
                      variant="primary"
                      type="submit"
                    >
                      Run Analysis
                    </Button>
                  </Form.Group>
                </Col>

                <Col className="col-md-6" style={{textAlign:'center',height:"200px"}}>
                   {(this.state.image && image || <h5 >Please Upload an Image to Start Analyzing</h5>)  }
                 
                  
                 
                </Col>
              </Row>
              <Row>
                <Col className="col-md-12">
                  <h3 style={style}>
                    <b>Result</b>
                  </h3>
                  <hr style={{ borderTop: " 1px solid black" }} />
                </Col>
                <Col className="col-md-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Damaged Parts</b></h4>
                            <h5>{this.state.damaged_parts}</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6">
                    <div className="thumb-wrapper">
                        <div className="thumb-content">
                            <h4><b>Severity</b></h4>
                            <h5>{this.state.severity_of_damage}</h5>
                        </div>
                    </div>
                </Col>
              </Row>

             
            </Form>
          </Container>
        </Layout>
      </LoadingOverlay>
    );
  }
}

export default CreateClaim;
