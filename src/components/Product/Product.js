import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';
const Product = ({ product }) => {
    const { name, supplierName, picture, description, quantity } = product;

    return (
        <div className='product-details'>
            <img className='w-100' src={picture} alt="" />
            <div className="product-info">
                <h1>name: {name}</h1>
                <p>{description}</p>
                <p>{quantity}</p>
                <p>suplaire : {supplierName}</p>
                <Button variant="warning" className='w-100 text-white'>Update</Button>
            </div>

        </div>
    );
};

export default Product;