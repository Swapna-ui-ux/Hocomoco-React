import React from 'react';
import Link from 'next/link'

import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};
const Menu = () => {
    return (
<>
<header className="site-header header-style-1">
            <div className="sticky-header main-bar-wraper">
                <div className="main-bar bg-white">
                    <div className="container">
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <a href="/"> <img src="assets/hocomoco_logo.png" alt="" /></a>
                            </div>
                        </div>
                    
                        <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed second-button">
                            <div className="animated-icon2"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </div>
                        </button>
                       
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <a href="#" data-toggle="modal" data-target="#login"> <i className="fa fa-user"></i> </a>
                            </div>
                            <div className="extra-cell">
                                <a href="tel:9704624696" data-toggle="tooltip" data-placement="bottom" title="Call Us"> <i className="fa fa-phone"></i> </a>
                            </div>
                            <div className="extra-cell">
                                <a href="mailto:info@hocomoco.in" data-toggle="tooltip" data-placement="bottom" title="Email"> <i className="fa fa-envelope"></i> </a>
                            </div>
                        </div>
                      
                        <div className="header-nav navbar-collapse collapse">
                            <ul className=" nav navbar-nav">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="#">Services</a>
                                    <ul className="sub-menu has-child">
                                        <li>
                                            <a href="Residential"> <i className="fa fa-home"></i> Residential Construction </a>
                                        </li>
                                        <li><a href="commercial-construction.html"><i className="fa fa-building" aria-hidden="true"></i> Commercial Construction</a></li>
                                        <li><a href="project-management.html"><i className="fa fa-pencil-square" aria-hidden="true"></i> Project Management</a></li>
                                        <li><a href="architecture-services.html"><i className="fa fa-sitemap" aria-hidden="true"></i> Architecture Services</a></li>
                                        <li><a href="interiors-smarthome.html"><i className="fa fa-houzz" aria-hidden="true"></i> Interiors & Smart Home</a></li>
                                    </ul>
                                </li>
                                <li><a href="Portfolio">Portfolio</a></li>
                                <li><a href="Emonitoring">E-Monitoring</a></li>
                                <li><a href="About-us">About Us</a></li> 
                                <li><a href="Contactus">Contact us</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
</>

    );
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export default Menu;