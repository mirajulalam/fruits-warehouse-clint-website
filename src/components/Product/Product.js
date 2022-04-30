import React from 'react';
import './Product.css';
const Product = ({ product }) => {
    const { name, supplierName, picture } = product;

    return (
        <div className='product-details'>
            <img className='w-100' src={picture} alt="" />
            <h1>name: {name}</h1>
            <p>suplaire : {supplierName}</p>
        </div>
    );
};

export default Product;