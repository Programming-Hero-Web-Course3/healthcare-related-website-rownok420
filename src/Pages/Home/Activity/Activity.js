import React from "react";
import "./Activity.css";

const Activity = () => {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card h-100 card-1 card-hover">
                        <i className="fas fa-6x fa-ambulance m-auto mt-5 mb-4"></i>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                Ambulatory
                            </h4>
                            <p className="card-text text-center text-white">We provide an exceptional blend of quality nursing and wellness services.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-2 card-hover">
                        <i className="fas fa-6x fa-syringe  m-auto mt-5 mb-4"></i>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                Vaccination
                            </h4>
                            <p className="card-text text-center text-dark">It is a range of healthcare services that can be given in your home. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-3 card-hover">
                        <i className="fas fa-6x fa-user-md m-auto mt-5 mb-4"></i>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                General Surgery
                            </h4>
                            <p className="card-text text-center text-white">Medical examinations, on condition of its periodic passing, allows a person …</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-4 card-hover">
                        <i className="fas fa-6x fa-user-nurse m-auto mt-5 mb-4"></i>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                Physicians
                            </h4>
                            <p className="card-text text-center text-white">It is a range of healthcare services that can be given in your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
