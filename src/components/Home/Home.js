import React from 'react';
import Banner from '../Banner/Banner';
import FoodDescription from '../FoodDescription/FoodDescription';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <FoodDescription></FoodDescription>
        </div>
    );
};

export default Home;