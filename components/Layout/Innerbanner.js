import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Innerbanner = () => {
    return (
        <>
           

            <div className="mt-bnr-inr1 overlay-wraper bg-top-center" style={{ "backgroundImage": "url(https://www.hocomoco.in/assets/slider/aboutbanner.jpg)", "backgroundRepeat": "no-repeat" }}>
                <div className="overlay-main bg-black opacity-05"></div>
                <div className="container">
                    <div className="mt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="text-white">
                                <h1 className="mt-tilte1 m-t0 font-30 text-center">About Us</h1>
                            </div>
                        </div>

                        <div>
                            <ul className="mt-breadcrumb breadcrumb-style-2">
                                <li><a href="https://www.hocomoco.in/">Home</a></li>
                                <li>About Us</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
                
        </>
    );
}

Innerbanner.propTypes = propTypes;
Innerbanner.defaultProps = defaultProps;
 
export default Innerbanner;