import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='text-center'>
            <div className="bg-img">
                <h1 className="banner-heading">
                    Care for Every Situation <br /> Seniors Deserve Better Life
                </h1>
                <p className="text-white py-3">
                    Collaborate Consulting exists to find the place where to
                    being seemingly disparate interests meet
                </p>
                <Link to="/contact">
                    <button className="home-button">
                        <i className="fas fa-user pe-2"></i>Contact us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
