import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import DataTable from "../../components/DataTable/DataTable";
import axios from "axios";
import Layout from "../../hoc/Layout/Layout";
import Search from "../../components/Search/Search";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Claims from "../../components/Claims/Claims";

class Profile extends Component {
  state = {
    message: "Loading",
    data: [],
    claimadjustor: ""
  };
  componentDidMount() {
    axios
      .get("/api/profile")

      .then(res => {
        console.log(res.data.data);
        this.setState({
          data: res.data.data,
          claimadjustor: res.data.claimadjustor
        });
      });
  }
  render() {
    const style = {
      color: "#000",
      fontSize: "26px",
      fontWeight: "300",
      textTransform: "uppercase",
      position: "relative"
    };
    return (
      <Layout>
        <Container>
          <Row>
            <Col className="col-md-6" style={{ marginTop: "25px" }}>
              <Search />
            </Col>
            <Col className="col-md-6" style={{ marginTop: "25px" }}>
              <LinkContainer to={"/create"}>
                <Col className="row justify-content-end">
                  <Button className="btn btn-success">
                    <FontAwesomeIcon icon="plus" /> New Claim
                  </Button>
                </Col>
              </LinkContainer>
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col>
              <h3 style={style}>
                <b>Summary</b>
              </h3>
              <hr style={{ borderTop: " 1px solid black" }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Claims info={this.state.data} />
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col>
              <h3 style={style}>
                <b>Claim's Reference</b>
              </h3>
              <hr style={{ borderTop: " 1px solid black" }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable
                data={this.state.data}
                claimadjustor={this.state.claimadjustor}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Profile;
