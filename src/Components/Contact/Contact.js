import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';


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
        <div className="p-5">
            <h1 className="text-center pb-3">Contact With Me</h1>
            <div className="d-flex justify-content-center">
                <div className="" style={{ width: '600px' }}>
                    <Form onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter Your Email" required />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control name="message" as="textarea" rows={3} placeholder="Enter Your Message" required />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;