import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import DataTable from '../../components/DataTable/DataTable';
import Cards from '../../components/Cards/Cards'
import axios from 'axios';
import Layout from '../../hoc/Layout/Layout';






class Profile extends Component{
    state={
        message:'Loading',
        data:[],
        claimadjustor:''
        
    }
    componentDidMount(){
        axios.get('/api/profile')
        
        .then(res =>
            {
                console.log(res.data.data);
                this.setState({data:res.data.data,claimadjustor:res.data.claimadjustor})
            }
            );
    }
    render(){
        
        return(
            <Layout>
                
            <Container fluid>
                
                <Row>
                    
                    <Col><Cards info={this.state.data}/></Col>
                  
                    
                    <Col> <DataTable data={this.state.data} claimadjustor={this.state.claimadjustor}/></Col>
                </Row> 
                

        </Container>
         
          
          </Layout>
        );

    }
}


export default Profile;