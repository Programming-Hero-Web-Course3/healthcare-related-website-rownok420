import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Experts from '../Experts/Experts';
import Happy from '../Happy/Happy';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Care />
            <Activity />
            <Experts />
            <Services />
            <Happy />
        </div>
    );
};

export default Home;