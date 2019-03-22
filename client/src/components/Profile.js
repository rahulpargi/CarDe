import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import DataTable from './Table';

import Cards from './Cards'

import Layout from './Layout'
import axios from 'axios';






class Profile extends Component{
    state={
        message:'Loading'
    }
    componentDidMount(){
        axios.get('/api/profile')
        
        .then(res =>console.log(res));
    }
    render(){
        return(
            <Layout>
                
            <Container fluid>
            
                <Row>

                    <Col><Cards/></Col>
                  
                    
                    <Col> <DataTable/></Col>
                </Row> 
                

        </Container>
         
          
          </Layout>
        );

    }
}


export default Profile;