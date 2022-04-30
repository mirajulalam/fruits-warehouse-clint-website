import React from 'react';

const Product = ({ product }) => {
    const { name, supplierName } = product;

    return (
        <div>
            <h1>name: {name}</h1>
            <p>suplaire : {supplierName}</p>
        </div>
    );
};

export default Product;