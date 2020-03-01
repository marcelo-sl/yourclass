import React from 'react';
import './index.css';
import {Container, Row,Col} from 'react-bootstrap';
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
import {Form} from 'react-bootstrap';

function Contact(){

    return(
        <>
            <Container>
            <Row>
                <Col sm={8}>
                <div class="grid-item">
                    <h1>Contato</h1>
                        <FaFacebook className="contact-icon "/>
                        <FaTwitter className="contact-icon" />
                        <FaInstagram className="contact-icon" />
                    <div>
                        <b>E-mail: </b><a href="mailto:a@a.com">contact@yourclass.com</a>
                    </div>
                    <div><b>Telefone: </b><span>+55 12 1234 - 5678</span></div>
                </div>

                </Col>
                <Col sm={4}>
                <Form.Control type="text" className="m-2" placeholder="Nome" />
                <Form.Control type="email"className="m-2" placeholder="Email" />
                <Form.Control as="textarea" style={{height:200}} className="m-2"placeholder="Mensagem" />
                </Col>
            </Row>
            </Container>
        </>

    );
}


export default Contact;