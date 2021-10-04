import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Aboutcontent = () => {
    return (
        <>
          <div className="bg-white">
			<div id="aboutus" className="p-b50" style={{"backgroundImage":"url(https://www.hocomoco.in/new-assets/images/background/bg-site.png)","background-repeat": "no-repeat","background-size": "75%","background-position": "center","opacity": "0.7;"}}>
				<div className="section-content ">
					<div className="container">
						<div className="row"> 
							<div className="sec-title text-center">
								<div className="mt-separator-outer">
									<div className="">
										<h2 className="text-uppercase text-black sep-line-one ">About Us</h2> </div>
								</div>
							</div>
							<div className="col-md-12 col-sm-12">
								<div className="m-about-containt text-black p-t20">
									<h4>Our Story: Redefining construction</h4> 
									<p className="abt-content">We believe that construction is a man made wonder. The thought of bringing imagination to real life structures excites us, each and every day the passion in us grows as we contribute to this industry. It gives us ample satisfaction that we are contributing to your happiness, your lifetime dream and our country’s growth/development.<br/>

																We aim to reform the way construction is currently being done, we intend to simplify and make this web place a one stop solution for all your construction needs.<br/>

																Our vision is to build a reliable website, a brand that you can rely upon, a brand that can provide you with the best professional service in the market, unlike other websites who just act as mediators; we want to take responsibility and ensure you have the right end result. We want to keep your journey as chaotic free as possible.<br/>

																Our team believes in providing the ‘right quality for the right price’ and it is one of our purposes of existence. Our core principles also include 4T’s<br/>
										</p> 
										<ul className="abt-points">
                                            <li> Transparency (Every transaction/activity as clear as crystal)</li>

                                             <li> Time (On time delivery)</li>

                                             <li> Tracking (you should be able to control and track every bit of your work execution, be it material or workforce, we have built necessary tools to assist you)</li>

                                             <li> Technology (Use of technology in planning, executing and monitoring will increase efficiency, reduce cost and allow us to produce great results for you)</li>
                                        </ul>
										<p className="abt-content"> 
										We have partnered with the best brands and professionals to ensure you get the best quality service.  Our intention to create this network is to get rid of your foot work with everything available to you at a click away.<br/><br/>

										‘We understand the value of your dream home and we promise to give you a memorable one’.<br/><br/>

										Regards,<br/>
										Team Hocomoco
										</p>

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

Aboutcontent.propTypes = propTypes;
Aboutcontent.defaultProps = defaultProps;
 
export default Aboutcontent;