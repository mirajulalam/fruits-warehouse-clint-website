import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { productId } = useParams();
    console.log(productId);
    return (
        <div>
            <h3>Product details : {productId}</h3>
        </div>
    );
};

export default ProductDetails;