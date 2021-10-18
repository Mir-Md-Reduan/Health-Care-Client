import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/Carosel/carousel-1.jpg'
import img2 from '../../Images/Carosel/carousel-2.jpg'
import img3 from '../../Images/Carosel/carousel-3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="carousel-title">CARING FOR LIFE</h2>
                            <p className="carousel-description">Leading the Way in Medical Excellence</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="carousel-title">COMMITED TO YOUR HEALTH</h2>
                        <p className="carousel-description">Leading the Way in Medical Excellence</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className="carousel-title">PROFESSIONAL HEALTH CARE</h2>
                        <p className="carousel-description">Leading the Way in Medical Excellence</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;