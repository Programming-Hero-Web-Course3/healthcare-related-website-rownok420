import React from "react";
import { FormControl, InputGroup} from "react-bootstrap";
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='my-5'>
            <div className="text-center py-5 card-style">
                <div>
                    <h1 style={{color: "#00a3c8"}}>Subscribe Our News Latter</h1>
                </div>
                <div className='w-50 mx-auto my-5 form-style'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="subscribe now"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className='p-2'
                        />
                        <button className='btn text-white button-color' id="button-addon2">
                            Subscribe
                        </button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
