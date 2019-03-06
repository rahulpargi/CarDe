import React,{Component} from 'react';
import Layout from './Layout';
import {Row,Col,Container,InputGroup,FormControl,Button} from 'react-bootstrap';
import ClaimTable from './ClaimTable'



class CreateClaim extends Component{

    render(){
        return(
            <Layout>
                <Container fluid>
                    <Row>
                        <Col  className="shadow-lg p-3 mb-5 bg-white rounded">
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Claims Reference Number</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="ABA120"  />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Image Uploaded</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="5.00" />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Images Missing</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="4.00" />
                            </InputGroup>
                        </Col>
                        <Col>
                         <div className="shadow-lg p-3 mb-5 bg-white rounded">
                         <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Make</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="" />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Year</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="" />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">VIN Number</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="" />
                            </InputGroup>
                            <Button
                                variant="primary"
                                size="sm"
                            > 
                            Run Analysis
                            </Button>

                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col className="shadow-lg p-3 mb-5 bg-white rounded">
                            <ClaimTable/>
                        </Col>
                    </Row>
                </Container>
                
            </Layout>
        )
    }
} 


export default  CreateClaim;