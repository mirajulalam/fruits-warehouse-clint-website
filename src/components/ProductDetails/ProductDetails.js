import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from './../../hooks/useProductDetails';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    console.log(product);
    return (
        <div>
            <h3>Product details : {productId}</h3>
            <h4>{product.name}</h4>
        </div>
    );
};

export default ProductDetails;