import React from 'react';
import Hero from "../hero/hero";
import Advant from "../advant/advant";
import Services from "../services/services";
import Cargo from "../cargo/cargo";
import Contact from "../contact/contact";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Advant/>
            <Services/>
            <Cargo/>
            <Contact/>
        </div>
    );
};

export default Home;