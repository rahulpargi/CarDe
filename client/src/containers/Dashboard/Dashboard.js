import React,{Component} from 'react';
import {Row,Col,Container,Image,Form} from 'react-bootstrap';
import ViewTable from '../../components/ViewTable/ViewTable';
import Chart from '../../components/Chart';


import './Dashboard.css'
import DetailTable from '../../components/DetailTable/DetailTable';
import Layout from '../../hoc/Layout/Layout';



class Dashboard extends Component{
    state={
        message:'Loading',
        data1:[]
    }
    componentDidMount(){
        
        this.setState({data1:this.props.location.state.data});
        
        fetch('/api/view')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render(){
       
        return(
           <Layout>
               <Container fluid>
              
                    <Row>
                        <Col className="col-md-3 space">
                            <Chart accuracy={this.state.data1.accuracy}/>
                        </Col>
                        <Col className="col-md-3 space ">
                       
                        <Form.Group controlId="total_parts" >
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
                                value={this.state.data1.length}
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
                        
                        </Form.Group>
                        </Col>
                        <Col className="col-md-6">
                            <ViewTable/>
                        </Col>
                       
                    </Row>
                  
                    <Row>
                        <Col >
                            <DetailTable imagePath={this.state.data1.imagePath}/>
                        </Col>
                       
                       
                    </Row>
                </Container>
            </Layout>
        )
    }
}



export default Dashboard;