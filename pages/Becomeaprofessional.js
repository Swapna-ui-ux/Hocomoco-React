import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
 
const propTypes = {};

const defaultProps = {};
 
const Becomeaprofessional = () => {
    return (
        <>
          <Innerbanner></Innerbanner>

          <div className="container">
            <div className="section-content p-t40 ">
                <div className="m-service-containt text-black">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 m-b30">
                            <div className="service-about-left">
                                <div className="mt-media p-t20"> <img src="https://www.hocomoco.in/assets/profession.jpg" alt="Become a Hocomoco Professional"/> </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 p-a0">
                            <div className="service-about-right m-b30">
                                <div className="contact-one m-b30">
                                    
                                    <div className="sec-title text-center m-b30">
                                        <div className="mt-separator-outer">
                                            <div className="">
                                                <h2 className="text-uppercase sep-line-one ">BECOME A PROFESSIONAL</h2> 
                                            </div>
                                        </div>
                                    </div> 
                                    
                                    <form className="contact-form" id="professionalform" name="professionalform" autoComplete="off" method="post" action="https://www.hocomoco.in/home/addVendor">
                                        <div className="form-group col-md-12 col-sm-12 p-a0">
                                            <div className="col-md-6 col-sm-12">
                                                <input name="work_type" id="work_type" type="text" required className="form-control m-b10" placeholder="Type of Work"/> </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input name="vendor_name" id="vendor_name" type="text" required className="form-control m-b10" placeholder="Vendor Name"/> </div>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 p-a0">
                                            <div className="col-md-6 col-sm-12">
                                                <input name="phone" id="phone" type="text" required className="form-control m-b10" pattern="^\d{10}$" minLength="10" maxLength="10" placeholder="Enter Phone Number"/> </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input name="email" id="email" type="email" className="form-control m-b10" required placeholder="Email" aria-required="true"/> </div>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 p-a0">
                                            <div className="col-md-6 col-sm-12">
                                                <input name="position" id="position" type="text" required className="form-control m-b10" placeholder="Position"/> </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input name="vendor_experiance" id="vendor_experiance" type="text" required className="form-control m-b10" placeholder="Vendor Experience"/> </div>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 p-a0">
                                            <div className="col-md-6 col-sm-12">
                                                <input name="address" id="address" type="text" required className="form-control m-b10" placeholder="Street Address"/> </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input name="city" id="city" type="text" required className="form-control m-b10" placeholder="City"/> </div>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 p-a0">
                                            <div className="col-md-6 col-sm-12">
                                                <input name="pin_code" id="pin_code" type="text" required className="form-control m-b10" placeholder="Pin Code"/> </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input name="reference" id="reference" type="text" required className="form-control m-b10" placeholder="Reference"/> </div>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 p-a0">
                                            <div className="col-md-12 col-sm-12">
                                                <textarea name="message" id="message" rows="2" className="form-control m-b10" required placeholder="REMARKS"></textarea>
                                            </div>
                                        </div>
                                        <div className="text-right col-md-12 col-sm-12">
                                            <input type="submit" id="professional_submit" name="professional_submit" value="Submit" className="site-button btn-effect m-t10 m-b20"/> </div>
                                 
                                  </form>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    );
}

Becomeaprofessional.propTypes = propTypes;
Becomeaprofessional.defaultProps = defaultProps;
 

export default Becomeaprofessional;