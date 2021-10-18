import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Experts from '../Experts/Experts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Care />
            <Activity />
            <Experts />
        </div>
    );
};

export default Home;