import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Image from 'next/image'
const propTypes = {};

const defaultProps = {};
 
const Portfolio = () => {
    return (
        <>
          <Innerbanner></Innerbanner>
          <div className="section-full p-b80 bg-gray-light  inner-page-padding">
                 
                <div className="container">
                    <div className="col-md-offset-4 col-md-4  p-t30 p-b30">
                        <div className="arrow-animation">
                            <div className="service-about-right m-b30 built-row">
                                <div className="call-for-quote-outer built-div">
                                    <div className="call-quote counter1 built-title">
                                        <h4>Built Up Area </h4> </div>
                                    <div className="call-estimate bg-dark built-content"> <a href="" className="">245000</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div> 
                    <div className="filter-wrap p-b30 text-center">
                        <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                            <li className="active"><a data-filter="*" href="#" data-hover="All">All</a></li>
                            <li><a data-filter=".cat-1" href="#" data-hover="Residential Construction">Residential Construction</a></li>
                            <li><a data-filter=".cat-2" href="#" data-hover="Commercial Construction">Commercial Construction</a></li>
                            <li><a data-filter=".cat-3" href="#" data-hover="Architecture Service">Architecture Service</a></li>
                            <li><a data-filter=".cat-4" href="#" data-hover="Interior & Smart Home">Interior & Smart Home </a></li>
                            <li><a data-filter=".cat-5" href="#" data-hover="Project Management">Project Management</a></li>
                        </ul>
                    </div>
                    
                    <div className="portfolio-wrap mfp-gallery work-grid row clearfix portfolio_Div">
                        
                        <div className="masonry-item cat-1 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/manibal.jpg" alt="" width="360" height="266"/>
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
                                                    <li className="post-date"><a href="Projectdetails"> View More </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="masonry-item cat-2 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/mainkirin.jpg" alt="" width="360" height="266" />
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
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/rammainnar.jpg" alt="" width="360" height="266" />
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
                         
                        <div className="masonry-item cat-4 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/kamaldamain.jpg" alt="" width="360" height="266" />
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
                         
                        <div className="masonry-item cat-5 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/manibal.jpg" alt="" width="360" height="266" />
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
                        
                        <div className="masonry-item cat-1 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/Mainsainro.jpg" alt="" width="360" height="266" />
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
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/Mainmanud.jpg" alt="" width="360" height="266" />
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
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/malwadai.jpg" alt="" width="360" height="266" />
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
                        
                        <div className="masonry-item cat-5 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/Mainnakar.jpg" alt="" width="360" height="266" />
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
                         
                        <div className="masonry-item cat-1 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/Mainpeakint.jpg" alt="" width="360" height="266" />
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
                         
                        <div className="masonry-item cat-4 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/mainchandachandra.jpg" alt="" width="360" height="266" />
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
                         
                        <div className="masonry-item cat-4 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/mainkontwotho.jpg" alt="" width="360" height="266" />
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
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/mainfartoli.jpg" alt="" width="360" height="266" />
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
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/vijairrumai.jpg" alt="" width="360" height="266" />
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
                        <div className="masonry-item cat-5 col-lg-4  col-md-4 col-sm-6 m-b30 port_area">
                            <div className="new-portfolio"> <Image  src="https://www.hocomoco.in/assets/slider/mainachyth.jpg" alt="" width="360" height="266" />
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
            <div className="clearfix"></div>
        </>
    );
}

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;
 
export default Portfolio;