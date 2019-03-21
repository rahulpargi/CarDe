import React from 'react';
import {Navbar,Nav,NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import './Header.css'



const Header=()=>{
   
        return(
            <div>
                <Navbar  className="navbar navbar-default navbar-expand-xl navbar-light">
                    <div className="navbar-header d-flex col">
                        <Navbar.Brand className="navbar-brand" href="#home">CARDEE-B
                        </Navbar.Brand>
                    </div>
                    <div className="collapse navbar-collapse justify-content-start">
                        

                  
                
                  
                        <Nav className="nav navbar-nav navbar-right ml-auto">
                           
                  
                            <Nav.Link className="nav-link" href="/profile">Home</Nav.Link>
                          
                            <Nav.Link className="nav-link" href="/create">Create</Nav.Link>
                            <Nav.Link className="nav-link" href="/view">Dashboard</Nav.Link> 
                            <Nav.Link className="nav-link" href="/logout">Log Out</Nav.Link> 
                            
                            
                           
                           
                        </Nav>
                        
                   
                    </div>
              
            </Navbar>

            </div>
        )   
    }



export default Header;