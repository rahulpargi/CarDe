import React,{Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import {Row,Col,Container,Form,Image,Button} from 'react-bootstrap';
import ClaimTable from '../ClaimTable/ClaimTable'


import './Button.css'
import Axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';




class CreateClaim extends Component{
    state={
        message:{},
        claim_reference_no:'',
        vin_number:'',
        make:'',
        year:'',
        image_name:'',
        image_type:'',
        selectedImage:"",
        date_uploaded:'',
        damaged_parts:'',
        severity_of_damage:'',
        accuracy:'89',
        isActive:false,
        disabled:false,
        claimadjustor:''
    }
    
    componentDidMount(){
        Axios.get('/api/create')
        .then(res=>{
            this.setState({claimadjustor:res.data.user1})
            
            
            
        })
        
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleImages=(selectedImage,imageName,imageType,date)=>{
        
        this.setState({
            selectedImage:selectedImage,
            image_name:imageName,
            image_type:imageType,
            date_uploaded:date
        })
    }
    handleSubmit=(event)=>{
        this.setState({isActive:!this.state.isActive})
        const { selectedImage,image_name,image_type,date_uploaded,claim_reference_no,vin_number,make,damaged_parts,severity_of_damage,accuracy,year} = this.state;
        event.preventDefault();
        let formData = new FormData();
        formData.append('selectedImage',selectedImage);
        formData.append('image_name',image_name);
        formData.append('image_type',image_type);
        formData.append('date_uploaded',date_uploaded);
        formData.append('claim_reference_no',claim_reference_no);
        formData.append('vin_number',vin_number);
        formData.append('make',make);
        formData.append('damaged_parts',damaged_parts);
        formData.append('severity_of_damage',severity_of_damage);
        formData.append('accuracy',accuracy);
        formData.append('year',year);
        Axios.post('/api/create',formData)
        .then(res=>{
            this.setState({
                damaged_parts:res.data.damaged_parts,
                severity_of_damage:res.data.severity_of_damage,
                accuracy:res.data.accuracy
            });
            this.setState({isActive:!this.state.isActive,disabled:!this.state.disabled})
            console.log(res)
        })
        .catch(function(err){
            console.log(err);
        })



    }   
    render(){
     

        
        return(
            <LoadingOverlay
                active={this.state.isActive}
                spinner
                text='Hang Tight it takes time to fetch data from api '
            >      
            <Layout>
                 
                <Container >
                

                <Form onSubmit={this.handleSubmit} method="POST"  >
                    <Row>
                       
                        <Col className="col-md-12">
                            <h2><b>Claim Adjustor:{this.state.claimadjustor}</b></h2>
                            
                        </Col>
                        <Col className="col-md-6">
                        <Form.Group controlId="claim_reference_no" >
                            <Form.Label>Claims Reference No</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                type="text" 
                                disabled={this.state.disabled}
                                placeholder="Enter Reference Number" />
                        
                        </Form.Group>
                        <Form.Group controlId="images_uploaded" >
                            <Form.Label>Images Uploaded</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                disabled
                                type="text" 
                                placeholder="5" />
                             
                        
                        </Form.Group>
                        <Form.Group controlId="images_missing" >
                            <Form.Label>Images Missing</Form.Label>
                            <Form.Control 
                                required
                                autoFocus
                                onChange={this.handleChange}
                                disabled
                                type="text" 
                                placeholder="4.00" />
                             
                        
                        </Form.Group>
                        
                        </Col>
                        <Col className="col-md-6">
                            <Form.Group controlId="make" >
                                <Form.Label>Make</Form.Label>
                                <Form.Control 
                                    required
                                    autoFocus
                                    onChange={this.handleChange}
                                    
                                    disabled={this.state.disabled}
                                    type="text" 
                                    placeholder="Enter Make" />
                                
                            
                            </Form.Group>
                            <Form.Group controlId="year" >
                                <Form.Label>Year</Form.Label>
                                <Form.Control 
                                    required
                                    autoFocus
                                    onChange={this.handleChange}
                                    
                                    disabled={this.state.disabled}
                                    type="text" 
                                    placeholder="Enter Car Year" />
                                
                            
                            </Form.Group>
                            <Form.Group controlId="vin_number" >
                                <Form.Label>VIN Number</Form.Label>
                                <Form.Control 
                                    required
                                    autoFocus
                                    onChange={this.handleChange}
                                    
                                    disabled={this.state.disabled}
                                    type="text" 
                                    placeholder="Enter VIN Number" />
                                
                            
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
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <ClaimTable handleImage={this.handleImages} severity={this.state.severity_of_damage} damage={this.state.damaged_parts} accuracy={this.state.accuracy}/>
                        </Col>
                        
                    </Row>
                </Form>
                
                </Container>
               
            </Layout>
            </LoadingOverlay>
        )
    }
} 


export default  CreateClaim;