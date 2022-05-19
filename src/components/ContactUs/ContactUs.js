import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast('Thanks for you information')
        event.target.reset();
    }
    return (
        <div>
            <h1 className='text-center text-warning mb-4'>Contact Us</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto text-center ' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control required type="text" placeholder="Your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control required as="textarea" placeholder='Your message' rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" className=' btn btn-warning text-white mb-4'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactUs;