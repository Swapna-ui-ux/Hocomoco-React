import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const propTypes = {};
const defaultProps = {};

const Services = () => {
    return (
    <>
     <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                <div className="container">
                  
                    <div className="">
                        <div className="p-b20">
                            <div className="sec-title text-center">
                                <h2 className="text-uppercase sep-line-one "> Our Services</h2> </div>
                        </div>
                    </div>
                  
                    <div className="container m-b20">
                        <div className="row row-40">
                            <div className="col-md-3 col-lg-3 how-works">
                                <a href="residential-construction.html">
                                    <article className="icon-box">
                                        <div className="box-top">
                                            <div className="box-icon"> <Image src="/assets/icons/house.png" width="44" height="44" alt="service icons" /> </div>
                                            <div className="box-header">
                                                <h5>Residential Construction</h5> </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="box-body">
                                            <p>It is a long established fact that a reader will be distracted.</p>
                                            <h6 className="margin-0">Book Now</h6> </div>
                                    </article>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3 how-works">
                                <a href="commercial-construction.html">
                                    <article className="icon-box">
                                        <div className="box-top">
                                            <div className="box-icon"> <Image  src="/assets/icons/building.png" width="44" height="44" alt="service icons"/> </div>
                                            <div className="box-header">
                                                <h5>Commercial Construction</h5> </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="box-body">
                                            <p>It is a long established fact that a reader will be distracted.</p>
                                            <h6 className="margin-0">Book Now</h6> </div>
                                    </article>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3 how-works">
                                <a href="project-management.html">
                                    <article className="icon-box">
                                        <div className="box-top">
                                            <div className="box-icon"> <Image  src="/assets/icons/project1.png" width="44" height="44" alt="service icons"/> </div>
                                            <div className="box-header">
                                                <h5>Project Management</h5> </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="box-body">
                                            <p>It is a long established fact that a reader will be distracted . </p>
                                            <h6 className="margin-0">Book Now</h6> </div>
                                    </article>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3 how-works">
                                <a href="architecture-services.html">
                                    <article className="icon-box">
                                        <div className="box-top">
                                            <div className="box-icon"> <Image  src="/assets/icons/architecture.png" width="44" height="44" alt="service icons"/> </div>
                                            <div className="box-header">
                                                <h5>Architecture Services</h5> </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="box-body">
                                            <p>It is a long established fact that a reader will be distracted. </p>
                                            <h6 className="margin-0">Book Now</h6> </div>
                                    </article>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3 how-works">
                                <a href="interiors-smarthome.html">
                                    <article className="icon-box">
                                        <div className="box-top">
                                            <div className="box-icon"> <Image  src="/assets/icons/interior.png" width="44" height="44" alt="service icons"/> </div>
                                            <div className="box-header">
                                                <h5>Interiors & Smart Home</h5> </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="box-body">
                                            <p>It is a long established fact that a reader will be .</p>
                                            <h6 className="margin-0">Book Now</h6> </div>
                                    </article>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>);
}

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;


export default Services;