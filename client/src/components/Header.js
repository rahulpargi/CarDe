import React,{Component} from 'react';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'



class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">CARDEE-B<br/>
                    (Nuvento-Automated Car Damage Estimator)<br/>
                    Claim Adjustor: Lorem Ipsum
                </Navbar.Brand>
               
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#deets">Profile</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Signout
                    </Nav.Link>
                </Nav>
                    
                </Navbar.Collapse>
                
              
            </Navbar>

            </div>
        )   
    }
}


export default Header;