import React,{Component} from 'react';
import {Row,Col,Container,InputGroup,FormControl} from 'react-bootstrap';
import Layout from './Layout'
import ViewTable from './ViewTable';
import DetailTable from './DetailTable';
import Chart from './Chart';
import axios from 'axios'



class Dashboard extends Component{
    state={
        message:'Loading'
    }
    componentDidMount(){
        fetch('/api/view')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render(){
       
        return(
           <Layout>
               <Container fluid>
               
                <Row>
                    <Col className="shadow-lg p-3 mb-5 bg-white rounded">
                        <Chart/>
                    </Col>
                    <Col className="shadow-lg p-3 mb-5 bg-white rounded">
                        <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Total Number Of Parts Scanned</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="11.00"  />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Total Images Scanned</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="13.00"  />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Estimated Percentage</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="51%"  />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Estimated Cost</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="$1200.00"  />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Total Loss Prediction</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="85%"  />
                        </InputGroup>
                    </Col>
                    <Col className="shadow-lg p-3 mb-5 bg-white rounded">
                        <h3>Estimated Parts</h3>
                        <ViewTable/>
                    </Col>
                </Row>
                <Row>
                    <Col className="shadow-lg p-3 mb-5 bg-white rounded">
                        <h3>Images Uploaded</h3>
                        <DetailTable/>
                    </Col>
                
                </Row>
                </Container>
            </Layout>
        )
    }
}



export default Dashboard;