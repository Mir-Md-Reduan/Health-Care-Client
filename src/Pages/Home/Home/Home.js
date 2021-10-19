import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header'


const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Doctors></Doctors>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;