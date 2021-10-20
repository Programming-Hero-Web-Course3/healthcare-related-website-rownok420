import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../../About/Subscribe/Subscribe";
import DepartCard from "../DepartCard/DepartCard";
import "./Department.css";

const Department = () => {
    return (
        <div>
            <div className="text-center">
                <div className="backgroung-img">
                    <h1 className="dep-heading">
                        WELCOME TO OUR <br /> OUTSTANDING DEPARTMENT
                    </h1>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-user pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>
            <DepartCard />
            <div className="container">
                <Subscribe />
            </div>
        </div>
    );
};

export default Department;
