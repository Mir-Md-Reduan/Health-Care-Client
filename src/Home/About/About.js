import React from 'react';
import './About.css';
import aboutUsImage from '../../Images/aboutUs.jpg';

const About = () => {
    return (
        <div id="about" className="my-5" >
            <div className="container">
                <div className="row">
                    <div className=" about-container">
                        <div className="image col-lg-12 col-md-7">
                            <img src={aboutUsImage} alt="About Image" />
                        </div>
                        <div className="about-description col-lg-12 col-md-5">
                            <h2 className="aboutUs-title">About US</h2>
                            <p className="aboutUS-description">Cedars-Sinai is a nonprofit academic healthcare organization serving the diverse Los Angeles community and beyond. With pioneering medical research achievements, education programs defining the future of healthcare, and wide-ranging community benefit activities, we’re setting new standards for quality and innovation in patient care. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;