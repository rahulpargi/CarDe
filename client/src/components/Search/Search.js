import React from 'react';
import {Row,Col,Card,Form} from 'react-bootstrap';
import './Search.css';
import axios  from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search =(props)=>{
    let query;

    const handleInput =(e)=>{
        query = e.target.value
    }
    const handleSearch =(e)=>{
        e.preventDefault()
        console.log(query);
        axios.get(`/api/search/${query}`)
        .then(res=> console.log(res))
    }
   return(
  <Row className="row justify-content-start ">
        {/* <Col className="col-12 col-md-10 col-lg-8">
            <Form className="card card-sm" onSubmit={handleSearch}>
                <Card.Body className="card-body row no-gutters align-items-center">
                   
                    <Col className="col">
                        <input className="form-control form-control-lg " type="text" placeholder="Search By Reference Number" onChange={handleInput}/>
                    </Col>
                
                    <Col className="col-auto">
                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                    </Col>
                </Card.Body>
            </Form>
       
        </Col>   */}
        <Col className="col-md-8">
       <div class="input-group">
            <input type="text" className="form-control" placeholder="Search Reference Number"/>
            <span class="input-group-btn">
                <button className="btn btn-search" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
            </span>
            </div>
        </Col>
</Row>



   );
    
  
}

export default Search;
