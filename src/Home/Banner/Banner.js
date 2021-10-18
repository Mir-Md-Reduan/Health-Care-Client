import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://s3.amazonaws.com/images.teladoc.com/www/2019/landing-pages/bdstart/teladoc-lp-hero-img-m.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="text-info">When you need answers, Best Doctors can help.</h1>
                            <p className="text-light">Get an Expert Medical Opinion from one of our world-renowned specialists so you can have the answers and confidence to make informed decisions about your health.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/01/31/22/32/boy-2027768__340.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;