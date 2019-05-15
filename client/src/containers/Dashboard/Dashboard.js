import React,{Component} from 'react';
import {Row,Col,Container,Image,Form} from 'react-bootstrap';
import ViewTable from '../../components/ViewTable/ViewTable';
import Chart from '../../components/Chart';
import './Dashboard.css'
import DetailTable from '../../components/DetailTable/DetailTable';
import Layout from '../../hoc/Layout/Layout';
import Chart_Parts from '../../components/Chart_Parts';
import axios from 'axios';
import Claims_Dashboard from '../../components/Claims_Dashboard/Claims_Dashboard';



class Dashboard extends Component{
    state={
        message:'Loading',
        data1:[],
        claim_adjustor:''
    }
    componentDidMount(){
        
        this.setState({data1:this.props.location.state.data});
        
        axios.get('/api/view')
        .then(res=>this.setState({claim_adjustor:res.data.claim_adjustor}))
        // fetch('/api/view')
        
        // .then(res => res.text())
        
        // .then(res => this.setState({message: res}));
    }
    
    render(){
        const style = {
            color: "#000",
            fontSize: "26px",
            fontWeight: "300",
            textTransform: "capitalize",
            position: "relative"
          };
          
        return(
           <Layout>
               <Container >
                   
                    <Row style={{ marginTop: "30px" }}>
                        <Col>
                        <h3 style={style}>
                            <b>Summary</b>
                        </h3>
                        <hr style={{ borderTop: " 1px solid black" }} />
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col className="col-md-4 space">
                            <Chart accuracy={this.state.data1.accuracy}/>
                        </Col>
                        <Col className="col-md-4 space">
                            <Chart_Parts/>
                        </Col> */}
                        
                       
                        {/* <Form.Group controlId="total_parts" >
                            <Form.Label>Total Number Of Parts Scanned</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                               
                                
                                value="11.00"
                                disabled="disabled"
                                type="text" 
                                placeholder="11.00" />
                        
                        </Form.Group>
                        <Form.Group controlId="total_images_scanned" >
                            <Form.Label>Total Images Scanned</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                
                                disabled="disabled"
                                value="1"
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        <Form.Group controlId="estimate_percentage" >
                            <Form.Label>Estimate Percentage</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                               
                                value="51%"
                                disabled="disabled"
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        <Form.Group controlId="Estimated Cost" >
                            <Form.Label>Estimated Cost</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                
                                value="$1200.00"
                                disabled="disabled"
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group>
                        <Form.Group controlId="Total Loss Prediction" >
                            <Form.Label>Total Loss Prediction</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                
                                value="85%"
                                disabled="disabled"
                                type="text" 
                                placeholder="" />
                        
                        </Form.Group> */}
                        <Col>
                        <Claims_Dashboard/>
                        </Col>

                        
                       
                    </Row>
                    
                    
                    <Row style={{ marginTop: "30px" }}>
                        <Col>
                        <h3 style={style}>
                            <b>Estimated Parts</b>
                        </h3>
                        <hr style={{ borderTop: " 1px solid black" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6">
                            <ViewTable/> 
                        </Col>
                        <Col className="col-md-6">
                            <Image src={`../../`+this.state.data1.imagePath} alt="Image" style={{width:"350px",height:"250px"}}/>
                        </Col>
                       
                       
                    </Row>
                </Container>
            </Layout>
        )
    }
}



export default Dashboard;