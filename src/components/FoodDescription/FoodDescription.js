import React from 'react';
import imagesDetails from '../../Images/fruits.webp';
import './FoodDescription.css';
const FoodDescription = () => {
    return (
        <div className='container food-details'>
            <div className="row">
                <div className='col-md-6 col-sm-12'>
                    <img className='w-100' src={imagesDetails} alt="" />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h2 className='text-center text-warning'>Fruits good for healts</h2>
                    <h5>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.Fruits are an important source of dietary fiber, vitamins (especially vitamin C), and antioxidants.Fruits are a good source of vitamins and minerals, recognized for their role in preventing vitamin C and vitamin A deficiencies. People who incorporate fruits and vegetables as part of a healthy eating pattern have a reduced risk of some chronic diseases. USDA's MyPlate encourages filling half of the plate with fruits and vegetables at mealtimes. </h5>
                </div>
            </div>
        </div>
    );
};

export default FoodDescription;