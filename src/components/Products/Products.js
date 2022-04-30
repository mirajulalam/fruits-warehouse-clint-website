import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center my-3'>Our Products</h1>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product._id} product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;