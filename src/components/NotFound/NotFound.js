import React from 'react';
import notfound from '../../Images/notfound.jpeg';
const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Oops!404-PAGE NOT FOUND</h1>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;