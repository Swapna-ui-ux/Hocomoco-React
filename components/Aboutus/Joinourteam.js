import React from 'react'; 
import PropTypes from 'prop-types';
import Image from 'next/image'

const propTypes = {};

const defaultProps = {};
 
const Joinourteam = () => {
    return (
        <>
         <div className="container">
            <div className="section-content p-t40 ">
                <div className="m-service-containt text-black">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <div className="service-about-left">
                                <div className="mt-media p-t20"> <Image  src="https://www.hocomoco.in/new-assets/assets/s-1.png" width="424" height="500" alt="About Hocomoco"/> </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <div className="service-about-right m-b30"> 
                                <div className="sec-title text-center m-b30">
                                    <div className="mt-separator-outer">
                                        <div className="">
                                            <h2 className="text-uppercase sep-line-one">Join Our Team</h2> </div>
                                    </div>
                                </div> 
                                <form method="post" id="myform" name="myform" autoComplete="off" action="https://www.hocomoco.in/Home/request1">
                                    <div className="form-group">
                                        <input name="name" id="name" type="text" required className="form-control m-b15" placeholder="Name"/> <span className="errorname"> *Required Field (Name)</span> </div>
                                    <div className="form-group">
                                        <input name="email" id="email" type="email" required className="form-control m-b15" placeholder="Email"/> <span className="erroremail"> *Required Field (Email ID)</span> </div>
                                    <div className="form-group">
                                        <input name="phone" id="phone" type="text" minLength="10" data-toggle="modal" data-target="#national" required className="only-numeric10 form-control m-b15" placeholder="Phone Number"/> <span className="errorphone"> *Required Field (Phone Number)</span> <span className="errorphone1">*Required Field (Please enter Country Code)</span> </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" rows="4" required className="form-control m-b15" placeholder="Message"></textarea> <span className="errormessage" style={{"color":"red","display":"none"}}> *Required Field (Message 10 to 200 Characters)</span> </div>
                                    <div className="container">
                                        <div className="modal fade" id="national" role="dialog">
                                        
                                            <div className="modal-dialog">
                                                <div className="modal-content"> 
                                                    <div className="modal-header">
                                                        <h4 className="modal-title"> Your current Location (Country of Residence) </h4> </div>
                                                    
                                                    <div className="modal-body">
                                                        <div className="row national">
                                                            <div className="col-md-6">
                                                                <label>
                                                                    <input type="radio" className="option-input radio" className="form-control" required name="residence" id="residence" value="India" />India</label>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label>
                                                                    <input type="radio" className="option-input radio" className="form-control" required name="residence" id="residence" value="International" />Outside India</label>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                    <div className="modal-footer"> </div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <input type="submit" id="request_quote" name="request_quote" value="Submit" className="site-button btn-effect"/> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        </>
    );
}

Joinourteam.propTypes = propTypes;
Joinourteam.defaultProps = defaultProps;
 
export default Joinourteam;