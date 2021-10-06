import React from 'react'; 
import PropTypes from 'prop-types';
import Image from 'next/image'
 
const propTypes = {};

const defaultProps = {};
 
const Howitworks = () => {
    return (
        <>
           <div className="section-full p-t20 p-b30 bg-white bg-repeat square_shape2 inner-page-padding">
                <div className="container"> 
                    <div className="p-b20">
                        <div className="">
                            <div className="sec-title text-center">
                                <h2 className="text-uppercase sep-line-one">How It Works ?</h2> </div>
                        </div>
                    </div> 
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 p-t30"> <span className="icon-count-number p-l50 p-r20">1</span>
                                        <div className="icon-md inline-icon m-b15 p-l40 p-r30 text-primary scale-in-center"> <span className="icon-cell"><Image src="/images/icon/requirement1.png" alt="" width="44" height="44" /></span> </div>
                                        <div className="icon-content center p-t10 p-b0 p-l10 p-r10">
                                            <h4 className="mt-tilte m-b25 text-center">Your Requirement</h4> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 p-t30"> <span className="icon-count-number p-l50 p-r20">2</span>
                                        <div className="icon-md inline-icon m-b15 p-l40 p-r30 text-primary scale-in-center"> <span className="icon-cell"><Image src="/images/icon/costestimate1.png" alt="" width="44" height="44"/></span> </div>
                                        <div className="icon-content p-t10 p-b0 p-l10 p-r10">
                                            <h4 className="mt-tilte m-b25 text-center">Cost Estimation</h4> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 p-t30"> <span className="icon-count-number  p-l50 p-r20">3</span>
                                        <div className="icon-md inline-icon m-b15 p-l40 p-r30 text-primary scale-in-center"> <span className="icon-cell"><Image src="/images/icon/schedule1.png" alt="" width="44" height="44"/></span> </div>
                                        <div className="icon-content center p-t10 p-b0 p-l10 p-r10">
                                            <h4 className="mt-tilte m-b25 text-center">Schedule Visit</h4> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 p-t30"> <span className="icon-count-number  p-l50 p-r20">4</span>
                                        <div className="icon-md inline-icon m-b15 p-l40 p-r30 text-primary scale-in-center"> <span className="icon-cell"><Image src="/images/icon/excute1.png" alt="" width="44" height="44"/></span> </div>
                                        <div className="icon-content p-t10 p-b0 p-l10 p-r10">
                                            <h4 className="mt-tilte m-b25 text-center">Work Execution</h4> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 how-works">
                                <div className="mt-icon-box-wraper m-b30">
                                    <div className="relative icon-count-2 p-t30"> <span className="icon-count-number  p-l50 p-r20">5</span>
                                        <div className="icon-md inline-icon m-b15 p-l40 p-r30 text-primary scale-in-center"> <span className="icon-cell"><Image src="/images/icon/architecture1.png" alt="" width="44" height="44"/></span> </div>
                                        <div className="icon-content p-t10 p-b0 p-l10 p-r10">
                                            <h4 className="mt-tilte m-b25 text-center">Satisfied Delivery</h4> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-full needsrow">
                <div className="container">
                    <div className="text-center needs-text">
                        <h2>All your construction needs under one roof</h2>
                        <div className="estimate"> <a href="" data-toggle="modal" data-target="#with-form"> Get a free estimate now</a> </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

Howitworks.propTypes = propTypes;
Howitworks.defaultProps = defaultProps;
 

export default Howitworks;