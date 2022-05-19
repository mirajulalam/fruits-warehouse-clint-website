import React from 'react';
import imagesDetails from '../../Images/fruits.webp';
import './FoodDescription.css';
const FoodDescription = () => {
    return (
        <div className='container food-details'>
            <h1 className='text-center text-warning mb-4'>Fruits good for healts</h1>
            <div className="row">
                <div className='col-md-6 col-sm-12' data-aos="zoom-in"
                    data-aos-duration="1000" data-aos-delay="200">
                    <img className='w-100' src={imagesDetails} alt="" />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h5>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.Fruits are an important source of dietary fiber, vitamins (especially vitamin C), and antioxidants.Fruits are a good source of vitamins and minerals, recognized for their role in preventing vitamin C and vitamin A deficiencies. People who incorporate fruits and vegetables as part of a healthy eating pattern have a reduced risk of some chronic diseases. USDA's MyPlate encourages filling half of the plate with fruits and vegetables at mealtimes.The nutrients in fruit are vital for overall health and maintenance of body systems.Fruits and vegetables help you maintain good health. </h5>
                </div>
            </div>
        </div>
    );
};

export default FoodDescription;