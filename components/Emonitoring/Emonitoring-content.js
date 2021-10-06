import React from 'react'; 
import PropTypes from 'prop-types';
import Image from 'next/image'
const propTypes = {};

const defaultProps = {};
 
const Emonitoringcontent = () => {
    return (
        <>
          <div id="monitoring">
    <div className="section-content p-t40 bg-gray-light m-b60">
        <div className="row">
             
            <div className="">
                <div className="">
                    <div className="sec-title text-center">
                        <h2 className="text-uppercase sep-line-one ">E Monitoring</h2> </div>
                </div>
            </div>
             
            <div className="section-full p-t20 p-b20 overlay-wraper bg-center bg-parallax bg-cover" data-stellar-background-ratio="0.5">
                <div className="overlay-main opacity-05"></div>
                <div className="container">
                    <div className="section-content">
                        <div className="call-us-section ">
                            <div className="col-md-7 col-sm-6 col-xs-12 col-xs-100pc p-b40">
                                <div className="mt-icon-box-wraper">
                                    <div className="relative">
                                        <div className="icon-content choose-link">
                                            <h4 className="mt-tilte m-b25 choose-cnt">Digitally track your work progress; we are here to assist you with:</h4>
                                            <p className="text-black monitor-content"> <i className="fa fa-long-arrow-right"></i> Day to day progress reporting (Daily Progress Report).
                                                <br/> <i className="fa fa-long-arrow-right"></i> Timeline tracking (work completed v/s to be completed).
                                                <br/> <i className="fa fa-long-arrow-right"></i> Complete material report that empowers you to track procurement, usage and available stock in site.
                                                <br/> <i className="fa fa-long-arrow-right"></i> Workforce report.
                                                <br/> <i className="fa fa-long-arrow-right"></i> Surveillance secured site (all your work is under cctv monitoring 24 X 7) to eliminate theft and damage.
                                                <br/> <i className="fa fa-long-arrow-right"></i> Transparent environment for you to understand your cost flow.
                                                <br/> <i className="fa fa-long-arrow-right"></i> Images and videos of work progress.
                                                <br/> <i className="fa fa-long-arrow-right"></i> Alerts that will keep you updated on work status.</p>
                                             </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6 col-xs-12 col-xs-100pc p-b40">
                                <div className="mt-icon-box-wraper">
                                    <div className="relative">
                                        <div className="icon-content"> <Image src="/assets/monitoring.jpg" alt="monitoring" width="445" height="293" /> </div>
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

Emonitoringcontent.propTypes = propTypes;
Emonitoringcontent.defaultProps = defaultProps;
 
export default Emonitoringcontent;