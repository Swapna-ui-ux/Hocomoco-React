import React from 'react';
import Image from 'next/image'

import PropTypes from 'prop-types';
import Loginpopup from './Loginpopup';
import Quoteform from './Quoteform';

const propTypes = {};
const defaultProps = {};

const Footer = () => {
    return (
<>


        <footer className="site-footer footer-large  footer-dark footer-wide">                 

            <div className="footer-top overlay-wraper">
                <div className="overlay-main"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 col-sm-6">    
                            <div className="widget widget_about">
 
                                <div className="logo-footer clearfix p-b15">
                                    <a href="index.html"><Image  src="/assets/footer-logo.jpg" layout="fill" alt=""/></a>
                                </div>
                                {/* <p className="max-w400 p-t20">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>                                 */}
                                
                                <ul className="social-icons  mt-social-links m-t20">

                                    <li><a href="#" className="fa fa-facebook"></a></li>
                                    <li><a href="#" className="fa fa-twitter"></a></li>
                                    <li><a href="#" className="fa fa-instagram"></a></li>
                                    <li><a href="#" className="fa fa-linkedin"></a></li>
                                </ul>                                     
                            </div>
                        </div> 
                         
            
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                            <div className="widget widget_services inline-links">
                                <h4 className="widget-title">Useful links</h4>
                                <ul> 
                                    <li><a href="Aboutus">About Us</a></li>
                                    <li><a href="Emonitoring">E-Monitoring</a></li>
                                    <li><a href="Becomeaprofessional">Become a Professional</a></li>
                                    <li><a href="Blogs">Blogs</a></li>
                                    <li><a href="Contactus">Contact Us</a></li>
                                </ul>
                            </div>                           
                        </div>
                        
            
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                            <div className="widget widget_services inline-links">
                                <h4 className="widget-title">Our Services</h4>
                                <ul>
                                  <li><a href="residential-construction.html">Residential Construction</a></li>
                                    <li><a href="commercial-construction.html">Commercial Construction</a></li>
                                    <li><a href="project-management.html">Project Management</a></li>
                                    <li><a href="architecture-services.html">Architecture Services</a></li>
                                    <li><a href="interiors-smarthome.html">Interiors & Smart Home</a></li>
                                </ul>
                            </div>                           
                        </div>
                 
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_address_outer">
                                <h4 className="widget-title">Contact Us</h4>
                                <ul className="widget_address">
                                    <li> 8-2-293/82/1/238, A/C,</li>
                                    <li> Road No 12, MLA Colony,</li>
                                    <li> Banjara Hills,</li>
                                    <li> Hyderabad, 500 034.</li>
                                </ul>  
                           
                            </div>                                                  
                        </div>  

                    </div>
                </div>  
            </div>
       
            <div className="footer-bottom overlay-wraper">
                <div className="overlay-main"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-7 col-xs-12 p-a0">
                                <div className="">
                                    <span className="copyrights-text">© 2020 Hocomoco All Right Reserved. Designed By <a href="http://weblabsolutions.in/" >Weblabs</a>.</span>
                                </div>
                            </div>    

                            <div class="col-md-5 last-footersec p-l0 ">
                                <div class="col-md-2"></div>
                                 <div class="col-md-3 col-xs-6 p-l0 p-r0"> 
                                  <span className="copyrights-text"><a href="Privacy-policy">Privacy Polocy</a></span>
                                </div>
                                <div class="col-md-4 col-xs-6 p-l0 p-r0">
                                     <span className="copyrights-text"><a href="Terms-conditions">Terms & Conditions</a></span>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    <div className="quote-img">
        <a href="" data-toggle="modal" data-target="#with-form"> <Image src="/images/icon/quote.png" alt="" width="35" height="114"/> </a>
    </div>
    <ul id="social-sidebar">
        <li> <a href="https://www.facebook.com/hocomoco.in/"  className="fa fa-facebook"><span>Facebook</span></a> </li>
        <li> <a href="https://twitter.com/Hocomoco1"  className="fa fa-twitter"><span>Twitter</span></a> </li>
        <li> <a href="https://www.instagram.com/hocomoco/?hl=en"  className="fa fa-instagram"><span>Instagram</span></a> </li>
        <li> <a href="https://www.linkedin.com/company/hocomoco/"  className="fa fa-linkedin"><span>Linkedin</span></a> </li>
    </ul>
    <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

    <div className="loading-area">
        <div className="loading-box"></div>
        <div className="loading-pic">
            <div> <Image src="/assets/preloader1old.gif" alt="" width="150" height="150"/> </div>
        </div>
    </div>

     
    <Loginpopup></Loginpopup>
    <Quoteform></Quoteform>

    </>


    );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;


export default Footer;