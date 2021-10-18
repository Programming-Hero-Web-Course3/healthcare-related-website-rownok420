import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';

const Home = () => {
    return (
        <div>
            <Banner />
            <Care />
            <Activity />
        </div>
    );
};

export default Home;