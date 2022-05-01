import React from 'react';
import Banner from '../Banner/Banner';
import FoodDescription from '../FoodDescription/FoodDescription';
import Footer from '../Footer/Footer';
import ProductDescription from '../ProductDescription/ProductDescription';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <FoodDescription></FoodDescription>
            <ProductDescription></ProductDescription>
            <Footer></Footer>
        </div>
    );
};

export default Home;