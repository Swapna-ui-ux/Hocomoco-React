import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Image from 'next/image'
const propTypes = {};

const defaultProps = {};
 
const Blogdetails = () => {
    return (
        <>
          <Innerbanner></Innerbanner>
          <div className="section-full p-tb80 inner-page-padding"> 
               
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-7">
                                <div className="news-listing ">
                                    
                                    <div className="blog-post blog-lg date-style-3 block-shadow">
                                            
                                        <div className="mt-post-media mt-img-effect zoom-slow">
                                            <a href="javascript:void(0);"><Image src="/assets/blog/thum5.jpg" alt="" width="748" height="350"/></a>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30 bg-white">
                                                
                                            <div className="mt-post-title blogcon">
                                                <h4 className="post-title"><a href="javascript:void(0);">Dummy text is also used to demonstrate the appearance of different  </a></h4>
                                            </div>
                                            <div className="mt-post-meta ">
                                                <ul>
                                                    <li className="post-date blogdtl"> <i className="fa fa-calendar text-primary"></i>6 Oct 2021 </li>
                                                    <li className="post-author blogdtl"><i className="fa fa-user text-primary"></i><a href="javascript:void(0);">By Name</a> </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis. Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts.<br/><br/>
                                                    Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputa cumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                                                </p> 
                                            </div>
                                            <div className="clearfix">
                                              
                                                <div className="widget_social_inks pull-right">
                                                    <ul className="social-icons social-radius social-dark m-b0">
                                                        <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li> 
                                                        <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                                                    </ul>
                                               </div>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                     
                                                                                       
                                </div> 
                            </div>
                            
                            <div className="col-md-4 col-sm-5">
                            
                                <aside  className="side-bar">
                                       
                                        <div className="widget bg-white  recent-posts-entry">
                                            <h4 className="widget-title  ">Recent Posts</h4>
                                            <div className="section-content">
                                                <div className="widget-post-bx">
                                                    <div className="widget-post clearfix">
                                                        <div className="mt-post-media">
                                                            <Image src="https://www.hocomoco.in/assets/blog/individual_house.jpg" alt="" width="90" height="90"/>
                                                        </div>
                                                        <div className="mt-post-info">
                                                            <div className="mt-post-meta">
                                                                <ul>
                                                                    <li className="post-author">5 Oct</li>
                                                                   
                                                                </ul>
                                                            </div>                                            
                                                            <div className="mt-post-header">
                                                                <h6 className="post-title">Don’t get framed by the competition, trust our solid reputation.</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-post clearfix">
                                                        <div className="mt-post-media">
                                                            <Image  src="https://www.hocomoco.in/assets/blog/individual_house.jpg" width="90" height="90" alt=""/>
                                                        </div>
                                                        <div className="mt-post-info">
                                                            <div className="mt-post-meta">
                                                                <ul>
                                                                    <li className="post-author">6 Oct</li>
                                                                   
                                                                </ul>
                                                            </div>                                            
                                                            <div className="mt-post-header">
                                                                <h6 className="post-title">building your dream house shouldn’t be a nightmare!</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-post clearfix">
                                                        <div className="mt-post-media">
                                                            <Image src="https://www.hocomoco.in/assets/blog/individual_house.jpg" alt="" width="90" height="90"/>
                                                        </div>
                                                        <div className="mt-post-info">
                                                            <div className="mt-post-meta">
                                                                <ul>
                                                                    <li className="post-author">7 Oct</li>
                                                                     
                                                                </ul>
                                                            </div>                                            
                                                            <div className="mt-post-header">
                                                                <h6 className="post-title">Helping you and your house become better acquainted.</h6>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>  
                                   </aside>
        
                            </div>
                                                                 
                        </div>
                    </div> 
            
            </div>
        </>
    );
}

Blogdetails.propTypes = propTypes;
Blogdetails.defaultProps = defaultProps;
 

export default Blogdetails;