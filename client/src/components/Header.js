import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link } from 'react-router-dom'



const Header=()=>{
   
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">CARDEE-B<br/>
                    (Nuvento-Automated Car Damage Estimator)<br/>
                    Claim Adjustor: Suraj Arukil
                </Navbar.Brand>
               
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link eventKey={2} href="/">
                        Signout
                    </Nav.Link>
                </Nav>
                    
                </Navbar.Collapse>
                
              
            </Navbar>

            </div>
        )   
    }



export default Header;