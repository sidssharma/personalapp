import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";
import ContactImage from "./contact.png"

export default function Contact(props) {
    return (
        <div className="Contact">
            <h5 id="contact">Get in Touch</h5>
            <h1 className="contactHeading">CONTACT</h1>
            <Card className="mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Card.Img variant="left" src={ContactImage} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <Card.Title>Contact Details</Card.Title>
                            <Card.Text>
                            Email: sid03.sharma@gmail.com<br/>
                            Phone Number: +91-8839301874
                            </Card.Text>
                            <button className='defaultButton'>Book a meeting</button>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
}
