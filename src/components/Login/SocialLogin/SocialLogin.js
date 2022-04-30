import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import googlelogo from '../../../Images/social1.png';
import Loading from '../../Loading/Loading';
import { Button } from 'react-bootstrap';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
            ;
    }
    if (user) {
        navigate(from, { replace: true })
    }


    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <p className='text-center'>{errorMessage}</p>
            <div>
                <Button variant="outline-warning" className='btn text-warnign w-50 d-block mx-auto my-1 google-btn' onClick={() => signInWithGoogle()}><img style={{ width: "30px" }} src={googlelogo} alt="" /><span className='px-2'>Google Sign In</span></Button>
            </div>
        </div>
    );
};

export default SocialLogin;