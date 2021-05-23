import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Col, Container, Form } from 'react-bootstrap';
import call from '../Images/call.png';
import mail from '../Images/mail.png';
import location from '../Images/location.png';
import Card from './Card';


const cardData = [
    {
        name: 'Phone',
        image: call,
        info: '+8801706499331'
    },
    {
        name: 'Email',
        image: mail,
        info: 'avitalukder20158@gmail.com'
    },
    {
        name: 'Location',
        image: location,
        info: 'Room No 569, QK Hall, CUET'
    }
]


const Contact = () => {

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_u45t2dh', 'template_4t99l04', event.target, 'user_Ye85szFjYIuZj6l96ituG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }


    return (
        <Container className="p-5">
            <h1 className="text-center pb-3">Contact With Me</h1>
            <div className="row p-3">
                {
                    cardData.map(card => <Card card={card} ></Card>)
                }
            </div>
            <div className="">
                <Form onSubmit={sendEmail}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control name="name" type="text" placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control name="email" type="email" placeholder="Enter Your Email" required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Control name="subject" as="textarea" placeholder="Enter Subject" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="message" as="textarea" rows={3} placeholder="Enter Your Message" required />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Contact;