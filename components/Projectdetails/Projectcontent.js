import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Projectcontent = () => {
    return (
        <>
           <div className="section-full p-b40 p-t60 bg-gray-light  inner-page-padding"> 
                <div className="container"> 
                    <div className="section-content">
                            <div className="row">
                                <div className="col-md-7 col-sm-6">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"background-image":"url(assets/portfolio/project/project2.jpg)"}}>
                                            <div className="overlay-main bg-black opacity-04"></div>
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                            </div> 
                                            </div>  
                                        </div>
                                    </div>                                                                              
                                </div>                            
                                <div className="col-md-5 col-sm-6">
                                     
                                    <div className="video-part-2">
                                        <h3>Project Details</h3> 
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="project-detls">2045 sq.ft.<br/><span>Area</span></p>
                                                </div>
                                                <div className="col-md-6">
                                                     <p className="project-detls">G + 1<br/><span>Floors</span></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="project-detls">Basic Package<br/><span>Package</span></p>
                                                </div>
                                                <div className="col-md-6">
                                                     <p className="project-detls">30 Lakh<br/><span>Price</span></p>
                                                </div>
                                            </div>   
                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.there are many                  variations of passages of Ipsum available,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.there are many                  variations of passages of Ipsum available,</p>
                                    </div> 
                                           
                                </div>
                            </div>
                       </div>   
                </div>
              
            </div>
        </>
    );
}

Projectcontent.propTypes = propTypes;
Projectcontent.defaultProps = defaultProps; 

export default Projectcontent;