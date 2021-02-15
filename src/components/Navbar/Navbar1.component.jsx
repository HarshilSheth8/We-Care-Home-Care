import React from 'react'
import { Navbar, NavLink, Button } from 'react-bootstrap'
import image from './logo192.png'


const Navbar1 = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={image} alt='logo' />
                 </Navbar.Brand>
                <div className="d-flex">
                    <NavLink to='/about' >
                        About
                    </NavLink>
                    <NavLink to='/services' >
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' >
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' >
                        Sign Up
                    </NavLink>
                <Button className="button" variant="primary" to='/sign-in'>Sign In</Button>
                </div>
            </Navbar>            
        </div>
    )
}

export default Navbar1
