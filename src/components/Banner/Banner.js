import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../Images/slider17.webp';
import slider2 from '../../Images/slider20.jpg';
import slider3 from '../../Images/slider21.jpg';
import slider4 from '../../Images/slider15.jfif';

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src={slider2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fruits stock</h3>
                        <p>Buy fresh fruits for delevery</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src={slider4}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fruits stock</h3>
                        <p>Buy fresh fruits for delevery</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fruits stock</h3>
                        <p>Buy fresh fruits for delevery</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;