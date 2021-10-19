import React from 'react';
import icon from '../../../Images/icon.png';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const iconElement = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const iconElement1 = <FontAwesomeIcon icon={faEnvelope} />
    const iconElement2 = <FontAwesomeIcon icon={faPhoneAlt} />
    return (
        <div className="footer mt-5">
            <div className="aboutUs-container p-2">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <div className="d-flex ms-4">
                                <p> {iconElement}&nbsp;&nbsp;</p>
                                <p>21/6 Bardashi, Amin Bazar, Dhaka</p>
                            </div>
                            <div className="d-flex ms-4">
                                <p> {iconElement1}&nbsp;&nbsp;</p>
                                <p>admin@medicare.com</p>
                            </div>
                            <div className="d-flex ms-4">
                                <p> {iconElement2}&nbsp;&nbsp;</p>
                                <p>admin@medicare.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5>About</h5>
                        About US <br />
                        Our Story <br />
                        Photo Galary
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5>Services</h5>
                        Diagnose <br />
                        Doctor Consultaion <br />
                        Emergency Support
                    </div>
                </div>
                <div className="right-container">
                    <p>All Right Reserved &copy;Md. Redun 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;