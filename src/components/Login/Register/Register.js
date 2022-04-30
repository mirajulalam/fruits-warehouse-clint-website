import React from 'react';
import './Register.css';
import loginImages from '../../../Images/loginImages.jpg';
import { Button, Form } from 'react-bootstrap';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword);

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='login-section container'>
            <div className="row">
                <div className='col-sm-12 col-md-6 mt-5'>
                    <img className='w-100 h-100' src={loginImages} alt="" />
                </div>
                <div className='col-sm-12 col-md-6 mt-5'>
                    <h1 className='text-center'>Register</h1>
                    <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                        </Form.Group>

                        <Button variant="warning" type="submit" className='text-white btn-submit'>
                            Submit
                        </Button>
                    </Form>
                    <p className='mx-auto w-50 mt-3'>Already have an account?  <Link to='/login' className='text-danger text-decoration-none pe-auto'> Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;