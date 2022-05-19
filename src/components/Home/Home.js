import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FoodDescription from '../FoodDescription/FoodDescription';
import ProductDescription from '../ProductDescription/ProductDescription';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <FoodDescription></FoodDescription>
            <ProductDescription></ProductDescription>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;