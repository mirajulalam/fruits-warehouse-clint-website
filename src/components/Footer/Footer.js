import React from 'react';

const Footer = () => {
    const currentDate = new Date().getFullYear()
    return (
        <div style={{ padding: "20px" }} className="bg-warning text-white text-center">
            <p><small>copyright &copy; {currentDate} Design By Mirajul Alam Alif</small></p>
        </div>
    );
};

export default Footer;