import React from 'react'; 
import PropTypes from 'prop-types';
import Image from 'next/image';
const propTypes = {};

const defaultProps = {};
 
const Homeportfolio = () => {
    return (
        <>
        <div className="section-full p-t20 p-b30 square_shape1 bg-parallax bg-cover bg-gray-light" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="p-b20">
                        <div className="">
                            <div className="sec-title text-center">
                                <h2 className="text-uppercase sep-line-one text-black">Our Portfolio</h2> </div>
                        </div>
                    </div> 
                    <div className="portfolio-wrap1 mfp-gallery work-grid row clearfix "> 
                        <div className="masonry-item1 cat-1 col-lg-3  col-md-4 col-sm-6 m-b20 port_area">
                            <div className="image-effect-one hover-shadow">
                                <a href="portfolio.html"> 
                                 <img src="assets/gallery/gal.jpg" alt="" className="portfolio-staticimg" height="470" />
                                    <div className="figcaption text-center">
                                        <h4>Lorem Ipsum Content</h4> </div>
                                    <a className="mfp-link" href="/assets/gallery/gal.jpg"> <i className="fa fa-arrows-alt"></i> </a>
                                </a>
                            </div>
                        </div> 
                        <div className="masonry-item1 cat-2 col-lg-3  col-md-4 col-sm-6 m-b20">
                            <div className="image-effect-one hover-shadow">
                                <a href="portfolio.html"> 
                                    <img  src="assets/gallery/gal1.jpg" alt="" className="portfolio-imgs"/>
                                    <div className="figcaption text-center">
                                        <h4>Lorem Ipsum Content</h4> </div>
                                    <a className="mfp-link" href="/assets/gallery/gal1.jpg"> <i className="fa fa-arrows-alt"></i> </a>
                                </a>
                            </div>
                        </div>
                        <div className="masonry-item1 cat-2 col-lg-3  col-md-4 col-sm-6 m-b20">
                            <div className="image-effect-one hover-shadow">
                                <a href="portfolio.html"> 
                                    <img  src="assets/gallery/gal2.jpg" alt="" className="portfolio-imgs" />
                                    <div className="figcaption text-center">
                                        <h4>Lorem Ipsum Content</h4> </div>
                                    <a className="mfp-link" href="/assets/gallery/gal2.jpg"> <i className="fa fa-arrows-alt"></i> </a>
                                </a>
                            </div>
                        </div>
                        <div className="masonry-item1 cat-2 col-lg-3  col-md-4 col-sm-6 m-b20">
                            <div className="image-effect-one hover-shadow">
                                <a href="portfolio.html"> 
                                    <img  src="assets/gallery/gal3.jpg" alt="" className="portfolio-imgs" />
                                    <div className="figcaption text-center">
                                        <h4>Lorem Ipsum Content</h4> </div>
                                    <a className="mfp-link" href="/assets/gallery/gal3.jpg"> <i className="fa fa-arrows-alt"></i> </a>
                                </a>
                            </div>
                        </div>
                        <div className="masonry-item1 cat-2 col-lg-3  col-md-4 col-sm-6 m-b20">
                            <div className="image-effect-one hover-shadow">
                                <a href="portfolio.html"> 
                                    <img  src="assets/gallery/gal4.jpg" alt="" className="portfolio-imgs"/>
                                    <div className="figcaption text-center">
                                        <h4>Lorem Ipsum Content</h4> </div>
                                    <a className="mfp-link" href="/assets/gallery/gal4.jpg"> <i className="fa fa-arrows-alt"></i> </a>
                                </a>
                            </div>
                        </div>
                        <div className="masonry-item1 cat-2 col-lg-3 col-md-4 col-sm-6 m-b20">
                            <div className="image-effect-one hover-shadow">
                                <a href="portfolio.html"> 
                                    <img  src="assets/gallery/gal5.jpg" alt="" className="portfolio-imgs" />
                                    <div className="figcaption text-center">
                                        <h4>Lorem Ipsum Content</h4> </div>
                                    <a className="mfp-link" href="/assets/gallery/gal5.jpg"> <i className="fa fa-arrows-alt"></i> </a>
                                </a>
                            </div>
                        </div>
                        <div className="masonry-item1 cat-2 col-lg-3 col-md-4 col-sm-6 m-b20">
                            <a href="portfolio.html">
                                <div className="mt-box our-speciallization-content portfolio-view">
                                    <h4 className="m-t0 text-black">Projects Portofolio</h4>
                                    <p className="text-black">Enter this creative space to explore </p>
                                    <div className="site-button btn-effect">View Projects</div>
                                </div>
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

Homeportfolio.propTypes = propTypes;
Homeportfolio.defaultProps = defaultProps;
 

export default Homeportfolio;