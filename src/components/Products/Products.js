import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-hollows-65771.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-warning mt-3'>Our Products</h1>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;