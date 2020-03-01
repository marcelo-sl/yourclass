import React from 'react';
import './index.css';
import {Navbar, Nav} from 'react-bootstrap';
import { FaHome, FaGraduationCap, FaSearch, FaInfo, FaEnvelope, FaSignInAlt} from 'react-icons/fa';
 

function Navb(){

    return(
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-black">
            <Navbar.Brand className="ml-4 logo-text" href="#home"> <FaGraduationCap className="logo-icon" /> YourClass</Navbar.Brand>
            <Nav className="ml-auto mr-4">
            <Nav.Link href="#home"><FaHome className="mr-2"/>Início</Nav.Link>
            <Nav.Link href="#search"><FaSearch className="mr-2" /> Pesquisar</Nav.Link>
            <Nav.Link href="#about"><FaInfo className="mr-2" /> Sobre</Nav.Link>
            <Nav.Link href="#contact"><FaEnvelope className="mr-2" />Contato</Nav.Link>
            <div className="hr"></div>
            <Nav.Link href="#sign-in"><FaSignInAlt className="mr-2" />Entrar</Nav.Link>
            </Nav>
        </Navbar>
        </>

    );
}


export default Navb;