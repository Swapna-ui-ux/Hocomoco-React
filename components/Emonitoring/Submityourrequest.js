import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Submityourrequest = () => {
    return (
        <>
		   <div className="section-content">
				<div className="mt-tabs bg-tabs">
				<div className="tab-content">
					<div id="requestsubmit" className="active">
						<div className="sumbit-bg">
							<div className="p-t20">
								<div className="col-md-offset-2 col-sm-8 for_shadow">
									<div className="col-sm-12 form-section section-full square_shape1 square_shape2 bg-parallax bg-cover">
										<div className="">
											<div className="">
												<div className="sec-title text-center">
													<h2 className="text-uppercase sep-line-one "> Submit your Request</h2>
												</div>
											</div>
										</div>
										
										<div className="wizard-container p-b10 p-t40" id="chartwizard">
											<div className="card wizard-card" data-color="red" id="wizard">
												<form name="myform" id="myform" action="<?php echo base_url();?>Home/portfolio" method="post">
													<div className="wizard-navigation">
														<div className="col-md-offset-1 col-sm-10 p-lr0">
															<div className="progress" id="typeconstruction">
																<div className="progress-bar progress-bar-primary"></div>
															</div>
														</div>
														<ul style={{"display":"none"}}>
															<li><a href="#construction" data-toggle="tab">01</a>
															</li>
															<li><a href="#planstart" data-toggle="tab">02</a>
															</li>
															<li><a href="#selectstage" data-toggle="tab">03</a>
															</li>
															<li><a href="#platsize" data-toggle="tab">04</a>
															</li>
															<li><a href="#fillform" data-toggle="tab">05</a>
															</li>
														</ul>
													</div>
													<div className="tab-content">
														<div className="tab-pane" id="construction">
															<div className="row">
																<div className="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
																	<div className="first-row"> 
																			
																			<div className="col-sm-12">
																				<h3 className="info-text text-center"> <strong>Type of Construction</strong></h3>
																			</div>
																			<div className="row product_cat">
																				<div className="col-md-6">
																					<label>
																						<input type="radio" className="option-input radio" required="required" name="construction_type" value="Apartment" data-toggle="modal" data-target="#national" />Apartment</label>
																				</div>
																				<div className="col-sm-6">
																					<label>
																						<input type="radio" data-toggle="modal" data-target="#national" className="option-input radio" required="required" name="construction_type" value="Independent House/Villa" />Independent House/Villa</label>
																				</div>
																				<div className="col-sm-6">
																					<label>
																						<input type="radio" data-toggle="modal" data-target="#national" className="option-input radio" required="required" name="construction_type" value="Form/Guest House" />Form/Guest House</label>
																				</div>
																				<div className="col-sm-6">
																					<label>
																						<input type="radio" data-toggle="modal" data-target="#national" className="option-input radio" required="required" name="construction_type" value="Studio Apartment" />Studio Apartment</label>
																				</div>
																				<div className="col-sm-6">
																					<label>
																						<input type="radio" data-toggle="modal" data-target="#national" className="option-input radio" required="required" name="construction_type" value="Others" />Others</label>
																				</div>
																				<div className="col-sm-12 p-t20">
																					<div className="pull-right">
																						
																						<button name="next" type="button" value="Next" className="btn btn-next btn-fill site-button btn-effect btn-wd">Next</button>
																					</div>
																					<div className="pull-left">
																						<input type='button' className='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
																						<div className="footer-checkbox">
																							<div className="col-sm-12">
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="planstart">
															<div className="row">
																<div className="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
																	<div className="first-row">
																		<div className="col-sm-12">
																			<h3 className="info-text"> <strong>When do you plan start</strong></h3>
																		</div>
																		<div className="row product_cat">
																			<div className="col-md-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="plan" value="Immediately" />Immediately</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="plan" value="With in a Month" />With in a Month</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="plan" value="With in 15 Days" />With in 15 Days</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="plan" value="Not Yet Decided" />Not Yet Decided</label>
																			</div>
																			<div className="col-sm-12 p-t30">
					
																				<div className="pull-right">
																					
																					<button name="next" type="button" value="Next" className="btn btn-next btn-fill site-button btn-effect btn-wd">Next</button>
																				</div>
																				<div className="pull-left">
																					
																					<button className="btn btn-previous btn-fill site-button-secondry btn-effect text-uppercase gray btn-wd" type="button" name='previous' value='Previous'>Previous</button>
																					<div className="footer-checkbox">
																						<div className="col-sm-12">
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes"/>
																								</label>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="selectstage">
															<div className="row">
																<div className="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
																	<div className="first-row">
																		<div className="col-sm-12">
																			<h3 className="info-text"> <strong>Please select Current Stage</strong></h3>
																		</div>
																		<div className="row product_cat">
																			<div className="col-md-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="stage" value="Permission" />Permission</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="stage" value="Designing" />Designing</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="stage" value="Cost Estimation" />Cost Estimation</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="stage" value="Execution" />Execution</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="stage" value="Interiors" />Interiors</label>
																			</div>
																			<div className="col-sm-6">
																				<label>
																					<input type="radio" className="option-input radio" required="required" name="stage" value="Others" />Others</label>
																			</div>
																			<div className="col-sm-12 p-t30">
																				
																				<div className="pull-right">
																					
																					<button name="next" type="button" value="Next" className="btn btn-next btn-fill site-button btn-effect btn-wd">Next</button>
																				</div>
																				<div className="pull-left">
																					
																					<button className="btn btn-previous btn-fill site-button-secondry btn-effect text-uppercase gray btn-wd" type="button" name='previous' value='Previous'>Previous</button>
																					<div className="footer-checkbox">
																						<div className="col-sm-12">
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes"/>
																								</label>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="platsize">
															<div className="row">
																<div className="col-md-offset-1 col-md-10 col-sm-12 col-xs-12 p-b30">
																	<div className="first-row">
																		<div className="col-sm-12">
																			<h3 className="info-text"> <strong>Plat Size in Squre yards</strong></h3>
																		</div>
																		<div className="row product_cat">
																			<div className="col-md-6">
																				<label>Plat Size in Squre yards</label>
																				<input type="text" className="form-control" required name="size" id="size" />
																			</div>
																			<div className="col-sm-6">
																				<label>Schedule an Appoinment</label>
																				<input type="date" className="form-control" required name="date" id="date" />
																			</div>
																			<div className="col-sm-12">
																				<label>Comments</label>
																				<textarea type="text" className="form-control" required name="comments" id="comments" ></textarea>
																			</div>
																			<div className="col-sm-12 p-t30">
																				
																				<div className="pull-right">
																					
																					<button name="next" type="button" value="Next" className="btn btn-next btn-fill site-button btn-effect btn-wd">Next</button>
																				</div>
																				<div className="pull-left">
																					
																					<button className="btn btn-previous btn-fill site-button-secondry btn-effect text-uppercase gray btn-wd" type="button" name='previous' value='Previous'>Previous</button>
																					<div className="footer-checkbox">
																						<div className="col-sm-12">
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes"/>
																								</label>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="fillform">
															<div className="row">
																<div className="col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
																	<div className="first-row">
																		<div className="col-sm-12">
																			<h3 className="info-text"> <strong>Fill in Form</strong></h3>
																		</div>
																		<div className="row product_cat">
																			<div className="col-md-6">
																				<label>Name *</label>
																				<input type="text" name="name" id="name" required className="form-control" />
																			</div>
																			<div className="col-md-6">
																				<label>Contact *</label>
																				<input type="text" name="contact" pattern="^\d{10}$" id="contact" className="form-control" />
																			</div>
																			<div className="col-md-6">
																				<label>Email *</label>
																				<input type="email" name="email" required id="email" className="form-control" />
																			</div>
																			<div className="col-md-6">
																				<label>Plot Location *</label>
																				<input type="text" name="location" required id="location" className="form-control" />
																			</div>
																			<div className="col-sm-12 p-t30">
																		
																											
																				<div className="pull-right">
																					
																					<button name="submit" type="submit" id="submit" value="Submit" className="btn btn-finish btn-fill site-button btn-effect btn-wd">Submit</button>
																				</div>
																				<div className="pull-left">
																					
																					<button className="btn btn-previous btn-fill site-button-secondry btn-effect text-uppercase gray btn-wd" type="button" name='previous' value='Previous'>Previous</button>
																					<div className="footer-checkbox">
																						<div className="col-sm-12">
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes"/>
																								</label>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div> 
												</form>
											</div>
										</div>
										
									</div>
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

Submityourrequest.propTypes = propTypes;
Submityourrequest.defaultProps = defaultProps; 

export default Submityourrequest;

