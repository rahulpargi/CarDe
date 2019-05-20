import React, { Component } from "react";
import Layout from "../../hoc/Layout/Layout";
import { Row, Col, Container, Form, Image, Button } from "react-bootstrap";
import ClaimTable from "../ClaimTable/ClaimTable";
import "./Button.css";
import '../../components/Cards/Cards.css'
import Axios from "axios";
import LoadingOverlay from "react-loading-overlay";


class EditClaim extends Component {
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
    // disabled: false,
    claimadjustor: "",
    image:null,
    imagePath:""
  };

  componentDidMount() {
    Axios.get(`/api/claim/edit/${this.props.match.params.id}`).then(res => {

        this.setState({
            claim_reference_no:res.data.user.images[0].claim_reference_no,
            year: res.data.user.images[0].year,
            make:res.data.user.images[0].make,
            vin_number: res.data.user.images[0].vin_number,
            damaged_parts: res.data.user.images[0].damaged_parts,
            severity_of_damage: res.data.user.images[0].severity_of_damage,
            imagePath:res.data.user.images[0].imagePath,
            image_name:res.data.user.images[0].image_name,
        })
      console.log(res.data.user.images[0]);
    });
    console.log(this.props.match.params.id);
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
    Axios.put(`/api/claim/edit/${this.props.match.params.id}`,formData)
      .then(res => {
        console.log(res);
        this.setState({
          damaged_parts: res.data.damaged_parts,
          severity_of_damage: res.data.severity_of_damage,
          accuracy: res.data.accuracy
        });
        this.setState({
         isActive: !this.state.isActive,
          // disabled: !this.state.disabled
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
                        <Image src={"../../../../"+this.state.imagePath} style={{width:"300", height:"200px"}}/>
                    
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
              
              <Row style={{ marginTop: "50px" }} >
                <Col>
                  <h3 style={style}>
                    <b>Edit Claims</b>
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
                      value={this.state.claim_reference_no}
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
                      value={this.state.year}
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
                      value={this.state.make}
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
                      value={this.state.vin_number}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col className="col-md-6">
                  <h3 style={style}>
                    <b>Edit Image</b>
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
                      Re-Run Analysis
                    </Button>
                  </Form.Group>
                </Col>

                <Col className="col-md-6" style={{textAlign:'center',height:"200px"}}>
                   {/* {(this.state.image && image || <h5 >Please Upload an Image to Start Analyzing</h5>)  } */}
                 {image}
                  
                 
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

export default EditClaim;
