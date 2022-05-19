import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import loginImages1 from '../../../Images/loginImages.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';
import axios from 'axios';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate(from, { replace: true })
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:7000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true })
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Email')
        }
        else {
            toast('Please enter your email address')
        }
    }
    return (
        <div className='login-section container'>
            <div className="row">
                <div className='col-sm-12 col-md-6 mt-5'>
                    <img className='w-100 h-100' src={loginImages1} alt="" />
                </div>
                <div className='col-sm-12 col-md-6 mt-5'>
                    <h1 className='text-center'>Login</h1>
                    <Form onSubmit={handleLogin} className='w-50 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="warning" type="submit" className='text-white btn-submit'>
                            Submit
                        </Button>
                    </Form>
                    <p className='mx-auto w-50 mt-2 '>{errorMessage}</p>
                    <p className='mx-auto mt-2 w-50'>Don't have account?  <Link to='/register' className='text-danger text-decoration-none pe-auto'> Please Register</Link></p>
                    <p className='mx-auto mt-2 w-50'>Forget password?   <span className='btn text-danger text-decoration-none pe-auto bg-none' onClick={resetPassword}>Reset Password</span></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;