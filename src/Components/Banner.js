import React from 'react';
import banner from "../img/banner.png";

const Banner = () => {
    return (
        <div className="container">
            <div className="row p-3">
                <div className="col-md-6 p-2">
                    <h2>Knowledge<span style={{ color:"orange" }}>Nook</span></h2><br />
                    <h2>An <span style={{ color:"orange" }}>Online</span> Education</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="btn btn-primary fs-5 mt-3" style={{backgroundColor:"orange",border:"none"}}>See more</button>
                </div>
                <div className="col-md-6">
                    <div>
                        <img src={banner} alt='' className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
