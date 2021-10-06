import React from 'react'; 
import PropTypes from 'prop-types';
import Image from 'next/image'
 
const propTypes = {};

const defaultProps = {};
 
const Residentialportfolio = () => {
    return (
        <>
            <div id="portfolio">
            <div className="section-full p-b80 bg-gray-light  inner-page-padding">
                    <div className="container">                      
                    <div className="p-b20 p-t20"> 
                                <div className="sec-title text-center">
                                <h2 className="text-uppercase sep-line-one text-black">Our Portfolio</h2>
                                </div> 
                        </div> 
                        <div className="work-grid row clearfix portfolio_Div">                        
                            <div className="masonry-item cat-1 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                                <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/manibal.jpg" width="360" height="266"  alt=""/>
                                    <div className="mt-post-info p-a15">
                                        <div className="mt-post-title">
                                            <h4 className="post-title">Residential Construction</h4>
                                            <h5>Banjara Hills, Hyderabad</h5> </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date">2550 Sq.ft.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date"> G + 2 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date"> View More </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="masonry-item cat-2 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                                <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/Mainsainro.jpg" width="360" height="266"  alt="" />
                                    <div className="mt-post-info p-a15">
                                        <div className="mt-post-title">
                                            <h4 className="post-title">Residential Construction</h4>
                                            <h5>Banjara Hills, Hyderabad</h5> </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date">2550 Sq.ft.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date"> G + 2 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date"> View More </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="masonry-item cat-3 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                                <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/Mainmanud.jpg" width="360" height="266"  alt="" />
                                    <div className="mt-post-info p-a15">
                                        <div className="mt-post-title">
                                            <h4 className="post-title">Residential Construction</h4>
                                            <h5>Banjara Hills, Hyderabad</h5> </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date">2550 Sq.ft.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date"> G + 2 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-date"> View More </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            
                                
                        </div>
                        
                    </div>
                    
                    <div className="flex-center container text-center p-t20"> <a href="#" className="site-button btn-effect"><span> View All</span></a> </div>
                </div>
            </div>
        </>
    );
}

Residentialportfolio.propTypes = propTypes;
Residentialportfolio.defaultProps = defaultProps;
 
export default Residentialportfolio;