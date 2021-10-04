import React from 'react'; 
import { useEffect } from 'react';
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Quoteform = () => {
    return (
        <>
          <div id="with-form" className="modal fade" role="dialog">
        <div className="modal-dialog"> 
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title text-yellow text-center font-24">Quote</h4> </div>
                <div className="modal-body">
                    <form id="myformquote" name="myformquote" className="mb-lg" method="post" action="https://www.hocomoco.in/Home/getarequest">
                        <div className="form-group mt-lg">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="control-label">Name</label>
                                    <input name="namee" id="namee" className=" form-control" placeholder="Type your name..." required type="text"/> 
                                    <span className="errornamee"> *Required Field (Name)</span> </div>
                                <div className="col-md-6">
                                    <label className="control-label">Mobile</label>
                                    <input name="phonee" id="phonee" minLength="10" className="only-numeric10 form-control" placeholder="Mobile Number" required type="text"/> 
                                    <span className="errorphonee"> *Required Field (Phone Number)</span> 
                                    <span className="errorphonee1"> *Required Field (Please enter Country Code)</span> </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group col-md-12 p-a0">
                                <label className="control-label">Your current Location (Country of Residence) </label>
                                <div className="row national">
                                    <div className="col-sm-6 col-xs-6">
                                        <label>
                                            <input type="radio" className="option-input radio" name="residence" id="residence" value="India"/>India</label>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label>
                                            <input type="radio" className="option-input radio" name="residence" id="residence" value="International"/>Outside India</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group col-md-12 p-a0">
                                <label className="control-label">Email</label>
                                <input name="emaile" id="emaile" className="form-control" placeholder="Type your email..." required type="email"/> 
                                <span className="erroremaile"> *Required Field (Email ID)</span> </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group col-md-12 p-a0">
                                <label className="control-label">Select Service</label>
                                <select name="depts[]" id="depts" multiple="multiple">
                                    <option value="1">Residential Construction</option>
                                    <option value="2">Commercial Construction</option>
                                    <option value="3">Architecture Services</option>
                                    <option value="4">Interiors & Smart Homes</option>
                                    <option value="5">Project Management</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group col-md-12 p-a0">
                                <label className="control-label">Message</label>
                                <textarea rows="3" name="messagee" id="messagee" className="form-control" placeholder="Type your Message..." required></textarea> 
                                <span className="errormessagee"> *Required Field (Message 10 to 200 Characters)</span> </div>
                        </div>
         
                <div className="modal-footer">
                    <div className="form-group col-md-12 p-a0">
                        <input type="submit" id="submit" name="submit" className="site-button btn-effect text-uppercase m-r25"/> </div>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    
        </>
    );
}

Quoteform.propTypes = propTypes;
Quoteform.defaultProps = defaultProps;

export default Quoteform;