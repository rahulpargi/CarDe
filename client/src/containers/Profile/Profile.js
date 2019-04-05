import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import DataTable from '../../components/DataTable/DataTable';
import Cards from '../../components/Cards/Cards'
import axios from 'axios';
import Layout from '../../hoc/Layout/Layout';






class Profile extends Component{
    state={
        message:'Loading',
        data:[]
        
    }
    componentDidMount(){
        axios.get('/api/profile')
        
        .then(res =>
            {
                console.log(res.data.data);
                this.setState({data:res.data.data})
            }
            );
    }
    render(){
        
        return(
            <Layout>
                
            <Container fluid>
                
                <Row>
                    
                    <Col><Cards/></Col>
                  
                    
                    <Col> <DataTable data={this.state.data}/></Col>
                </Row> 
                

        </Container>
         
          
          </Layout>
        );

    }
}


export default Profile;