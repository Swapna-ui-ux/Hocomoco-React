import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Image from 'next/image'

const propTypes = {};

const defaultProps = {};
 
const Contactus = () => {
    return (
        <>
          <Innerbanner></Innerbanner>
          <div className="section-full p-t80 inner-page-padding"> 
                <div className="container">
                 
                    <div className="section-content"> 
                        <div className="row">
						 <div className="col-md-5 col-sm-6">
                            	<div className="contact-info m-b30">
                                     
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary"></span> How Can we help you</h2>
                                            </div>
                                        </div>
                                    </div>                   
                                     
                                    <div className="p-l20 p-r20 p-b20 text-black">                               
                                        <div className="mt-icon-box-wraper left p-b30">
                                             
                                            <div className="col-md-2">
                                                <Image src="/assets/mobile.png" alt="" width="40" height="38" />
                                            </div>
                                            <div className="col-md-10 icon-content">
                                                <h5 className="m-t0 font-weight-500 font-16"><b>Phone number</b></h5>
                                                <p>+91 9121172233</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-icon-box-wraper left p-b30">
                                             
                                              <div className="col-md-2">
                                                <Image src="/assets/email.png" alt="" width="40" height="38"/>
                                            </div>
                                            <div className="col-md-10 icon-content">
                                                <h5 className="m-t0 font-weight-500 font-16"><b>Email address</b></h5>
                                                <p>info@hocomoco.in</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-icon-box-wraper left">
                                           
                                             <div className="col-md-2">
                                                <Image src="/assets/location.png" width="40" height="38" alt=""/>
                                            </div>
                                            <div className="col-md-10 icon-content">
                                                <h5 className="m-t0 font-weight-500 font-16"><b>Address info</b></h5>
                                                <p>#401, 8-2-686/DR/Plot No:8, <br/>
                                                    Road No 12, Banjara Hills, <br/>
                                                    Hyderabad 500034</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   

                        	 						
                            <div className="col-md-1"></div>
                        	<div className="col-md-6 col-sm-6">
                            	<form className="contact-form cons-contact-form" method="post" action="">
                                    <div className="contact-one m-b30">
                                    
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one ">Get In touch</h2>
                                            </div>
                                        </div>
                                    </div>    
                                                                        
                                        <div className="form-group">
                                            <input name="username" type="text" required className="form-control m-b15" placeholder="Name"/>
                                        </div>
                                   
                                        <div className="form-group">
                                            <input name="email" type="text" className="form-control m-b15" required placeholder="Email"/>
                                        </div>
                                         <div className="form-group">
                                            <input name="phone" type="" className="form-control m-b15" required placeholder="Phone Number"/>
                                        </div>
                                   
                                        <div className="form-group">
                                            <textarea name="message" rows="4" className="form-control m-b15" required placeholder="Message"></textarea>
                                        </div>
                                    
                                    	<div className="text-right">
                                            <button name="submit" type="submit" value="Submit" className="site-button btn-effect">submit
                                                    
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>                        
                           </div>
                    </div>
                    
                                   
                </div>

                <div className="gmap-outline">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0864144770326!2d78.4431452143535!3d17.407640106803782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973c732c3007%3A0xff8f4ad64a9bc4d0!2s401%2C%208%2C%20Rd%20Number%2012%2C%20Amrutha%20Estate%2C%20Bhola%20Nagar%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1582531320079!5m2!1sen!2sin" width="100%" height="400" frameBorder="0" style={{"border":"0"}} allowFullScreen=""></iframe>
                    </div>     
           </div>
        </>
    );
}

Contactus.propTypes = propTypes;
Contactus.defaultProps = defaultProps;
 
export default Contactus;