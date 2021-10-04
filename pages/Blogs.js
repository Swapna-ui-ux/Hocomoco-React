import React from 'react'; 
import PropTypes from 'prop-types'; 
import Innerbanner from '../components/Layout/Innerbanner'; 
const propTypes = {}; 
const defaultProps = {}; 
const Blogs = () => { 
    return (
    <>
        <Innerbanner></Innerbanner>
        <div className="section-full bg-white inner-page-padding">
            <div className="">
                <div className="sec-title text-center">
                    <h2 className="text-uppercase sep-line-one">Blogs</h2> </div>
            </div>
            <section className="portfolio section">
                <div className="container">
                    <div className="filters">
                        <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                            <li className="active" data-filter="*" href="#" data-hover="All">All</li>
                            <li data-filter=".residential" href="#" data-hover="Residential Construction">Residential Construction</li>
                            <li data-filter=".commercial" href="#" data-hover="Commercial Construction">Commercial Construction</li>
                            <li data-filter=".architecture" href="#" data-hover="Architecture Service">Architecture Service</li>
                            <li data-filter=".interior" href="#" data-hover="Interior & Smart Home">Interior & Smart Home</li>
                            <li data-filter=".project" href="#" data-hover="Project Management">Project Management</li>
                        </ul>
                    </div>
                    <div className="filters-content">
                        <div className="row grid">
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/choosing_home.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Things to keep in mind while choosing home construction partner </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/JCB_story.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Planning and cost estimates for your home in Hyderabad </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/individual_house.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Best individual house builders in Hyderabad </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/plan_evelution.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Plan & Elevation Designs from best Residential Architects in Hyderabad | HocoMoco.in </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/hocomoco_blog_article.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Hocomoco: Technology-driven building construction company in India </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/Google_disco.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Building a Home in Hyderabad: New Home Cost Estimator by Hocomoco </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/article2.png)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Eliminating Home Construction Challenges through Technology </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/blog-image.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Constructions costs 101: all you need to know </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/construction.png)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Prices of building materials up 30 percent effects House construction- Source TOI </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/image201.jpeg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                   <div className="blog-content"> Building a house has never been easier thanks to Hocomoco. Here&apos;s what they do </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/commercial.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Construction Tech How can leveraging technology minimize construction risks </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/architecture2.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Sustainable construction
                                                                <br/> The future or a simple myth </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/project.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> How Construction Tech Companies would change the home building scenario after COVID 19 </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 all residential">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/image1.jpg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Building a home for your parents in India? Hocomoco comes for the rescue of NRIs </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 all project">
                                <div className="item">
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="blog2">
                                            <a href="Blogdetails">
                                                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{"backgroundImage": "url(https://www.hocomoco.in/assets/blog/image202.jpeg)"}}>
                                                    <div className="overlay-main bg-black opacity-06"></div>
                                                    <div className="video-section-inner">
                                                        <div className="video-section-content">
                                                            <div className="blog-content"> Hocomoco - a proptech startup offering construction tracking services </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="m-about-years bg-moving">
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left"> <a href="Blogdetails" title="Read More" rel="bookmark" className="site-button-link">Read More
                                                                <i className="fa fa-arrow-circle-o-right arrow-animation"></i></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </> 
        ); 
    } 
    Blogs.propTypes = propTypes; 
    Blogs.defaultProps = defaultProps; 
    export default Blogs;