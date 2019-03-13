import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import './Header.css'


const Header=()=>{
   
        return(
            <div>
                <Navbar  className="navbar navbar-default navbar-expand-xl navbar-light">
                    <div className="navbar-header d-flex col">
                        <Navbar.Brand className="navbar-brand" href="#home"><i class="fa fa-cube"></i><b>CARDEE-B</b><br/>
                        </Navbar.Brand>
                    </div>
                    <div className="collapse navbar-collapse justify-content-start">
                        

                  
                
                  
                        <Nav className="nav navbar-nav navbar-right ml-auto">
                          
                            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="/">Dashboard</Nav.Link>
                            <Nav.Link className="nav-link" href="/create">Profile</Nav.Link>
                            
                           
                           
                        </Nav>
                        
                   
                    </div>
              
            </Navbar>

            </div>
        )   
    }



export default Header;