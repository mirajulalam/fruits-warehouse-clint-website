import React from 'react';
import './Footer.css';
const Footer = () => {
    const currentDate = new Date().getFullYear()
    return (
        <div className='bg-warning' style={{ padding: '30px' }}>
            <div className="bg-warning text-white text-center footer">
                < div className='footer-title' >
                    <span class="footer-title fw-bold fs-5 pb-2">COMPANY</span>
                    <span class="footer-title">About us</span>
                    <span class="footer-title">Quality & services</span>
                    <span class="footer-title">Brands</span>
                    <span class="footer-title">Contact</span>
                </div >
                <div className='footer-title'>
                    <span class="footer-title fw-bold fs-5 pb-2">PRODUCTS</span>
                    <span class="footer-title">Fresh product</span>
                    <span class="footer-title">processed foods</span>
                    <span class="footer-title">Daily product</span>
                    <span class="footer-title">fruits</span>
                </div>
                <div className='footer-title'>
                    <span class="footer-title fw-bold fs-5 pb-2">Legal</span>
                    <span class="footer-title">Terms of use</span>
                    <span class="footer-title">Privacy policy</span>
                    <span class="footer-title">Cookie policy</span>
                </div>
            </div >
            <div className='text-center pt-3'>
                <span className='text-white my-4'>copyright &copy; {currentDate} Design By Mirajul Alam Alif</span>
            </div>
        </div>
    );
};

export default Footer;