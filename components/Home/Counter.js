import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Counter = () => {
    return (
        <>
          <div className="section-full mobile-page-padding p-tb50 overlay-wraper bg-cover bg-center" style={{"backgroundImage":"url(assets/bg-1.jpg)"}}>
                <div className="overlay-main bg-black opacity-06"></div>
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="text-primary mt-icon-box-wraper text-center left">
                                    <div className="p-t10 bg_counter"> <i className="flaticon-worker"></i> </div>
                                    <div className="icon-content text-white">
                                        <div className="font-40 font-weight-700 m-b5">2000+</div> <span className="font-16">Workforce</span> </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="text-primary mt-icon-box-wraper left text-center">
                                    <div className="p-t10 bg_counter"> <i className="flaticon-measure"></i> </div>
                                    <div className="icon-content text-white">
                                        <div className="font-40 font-weight-700 m-b5">25+</div> <span className="font-16">Experience</span> </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="text-primary mt-icon-box-wraper left text-center">
                                    <div className="p-t10 bg_counter"> <i className="flaticon-city"></i> </div>
                                    <div className="icon-content text-white">
                                        <div className="font-40 font-weight-700 m-b5">9,00,000+</div> <span className="font-16">Built Up Area</span> </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="text-primary mt-icon-box-wraper left text-center">
                                    <div className="p-t10 bg_counter"> <i className="flaticon-crane"></i> </div>
                                    <div className="icon-content text-white">
                                        <div className="font-40 font-weight-700 m-b5">200+</div> <span className="font-16">Projects</span> </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="text-primary mt-icon-box-wraper left text-center">
                                    <div className="p-t10 bg_counter"> <i className="flaticon-art-and-design"></i> </div>
                                    <div className="icon-content text-white">
                                        <div className="font-40 font-weight-700 m-b5">50,000+</div> <span className="font-16">Community</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}


Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps; 
export default Counter;