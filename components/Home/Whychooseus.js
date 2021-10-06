import React from 'react'; 
import PropTypes from 'prop-types';
import Image from 'next/image' 
 
const propTypes = {};

const defaultProps = {};
 
const Whychooseus = () => {
    return (
        <>
           <div className="section-full overlay-wraper bg-center bg-parallax bg-cover p-b20 p-t40 xs-hidden bg-gray-light">
                <div className="container">
                    <div className="sec-title text-center p-b20">
                        <h2 className="text-uppercase sep-line-one text-black"> Why Choose Us</h2> </div>
                    <div className="row row-pb-md">
                        <div className="col-md-12 padding-0">
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Integrated Home construction and monitoring services" src={"/images/icon/professional-service-icon-min.png"} width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">Professional Service</h5>
                                    <p className="text-left font-light">‘Best in class’ service ensured with our experienced in-house Design & Construction team. Complete Hassle-free Experience from beginning to end. </p>
                                </aside>
                            </div>
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Wide range of Construction and monitoring services" src="/images/icon/insured-work-icon-min.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">Insured Work</h5>
                                    <p className="text-left font-light">Your Structure is insured with us. Any issue- post construction, no need to worry. We have your back; we are always available at a click/call away. </p>
                                </aside>
                            </div>
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Integrated Home construction and monitoring services" src="/images/icon/digital-tracking-icon-min.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">100% transparency </h5>
                                    <p className="text-left font-light">No Hidden Charges, Every detail is as clear as a crystal. To bring in transparency is one of our core purposes of existence. </p>
                                </aside>
                            </div>
                        </div>
                        <div className="col-md-12 mt-15 padding-0">
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="End to End Construction Services" src="/images/icon/transparency-icon-min.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">Digital Tracking</h5>
                                    <p className="text-left font-light">You can now digitally track your work progress, with a simple login you are empowered to control and track every inch of your work site. </p>
                                </aside>
                            </div>
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Integrated Home construction and monitoring services" src="/images/icon/quality-assurance-icon-min.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">Quality Assurance</h5>
                                    <p className="text-left font-light">Be ensured with us that you have the ‘right quality for the right price’. No more over charging and no more substandard products.</p>
                                </aside>
                            </div>
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Wide range of Construction and monitoring services" src="/images/icon/on-time-delivery-icon.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">On time Delivery</h5>
                                    <p className="text-left font-light">Missing deadline? Not in our dictionary, we are ‘on time every time’. We will ensure ‘on time delivery’ thus ensuring that there are no cost over runs. </p>
                                </aside>
                            </div>
                        </div>
                        <div className="col-md-12 mt-15 padding-0">
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Wide range of Construction and monitoring services" src="/images/icon/flexible.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">Flexible Pricing Models</h5>
                                    <p className="text-left font-light">Quotes that are tailored fit to your choice. Not happy with rigid pricing models, we understand your frustration. With us, you can customize as per your convenience. </p>
                                </aside>
                            </div>
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Wide range of Construction and monitoring services" src="/images/icon/curbing.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">Curbing Malpractices</h5>
                                    <p className="text-left font-light">We have put a check on Malpractices. With our new age technology assistance, we have curbed all the Fraudulent practices. </p>
                                </aside>
                            </div>
                            <div className="col-md-4 whychoose-box"> <span className="whychoose-icon">
                            <Image  alt="Wide range of Construction and monitoring services" src="/images/icon/nocostruns.png" width="50" height="50"/>
                        </span>
                                <aside className="whychoose-text">
                                    <h5 className="margin-0">No Cost Over Runs</h5>
                                    <p className="text-left font-light">Once we finalize on a Quote, there is no going back. We promise you a 100% No Cost Overrun Policy. </p>
                                </aside>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row read-more-less" data-id="0">
                        <div className="col-sm-12 read-toggle readmore_sec" data-id='0'>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">Residential Construction: Complete end to end construction services- beginning with legal permissions from Govt. authorities to designing (Architecture and Structural), execution (construction) , Interiors and monitoring services for ‘your dream home’
                                        <br/> We understand the stress and chaos that goes through the process of building your beautiful home, although the end results are amazing, the construction journey is hectic and not very pleasant. </p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light"> In today’s modern and fast life, home/apartment construction has become a very time consuming process but we are here to assist you build your home/apartment faster, prettier and also easier.</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">We have built this web place for you based on 4T’s (our principles)</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">Transparency (we are putting an end to endless cheating)</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">Time (On time delivery, no more cost over runs due to delay in home construction)</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">Tracking (you should be able to control and track every bit of your construction, be it material or workforce, we have built necessary tools to assist you)</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">Technology (Use of technology in planning, executing and monitoring will increase efficiency, reduce cost and allow us to produce great results for you)</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">We are here to facilitate and execute end to end services on your behalf while taking into account your each preference in detail and making it the ‘best from better’ while you can monitor from your home.</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light">You can be assured with us that you have the right quality for the right price, the best consultants, right professionals and in the end ‘the best home’ assurance</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light"> Our aim is to make this web place as one stop solution for your complete home construction beginning with architecture (Home designing) and assisting you to get necessary building permissions as we help you Build your home / Build my house.</p>
                                </aside>
                            </div>
                            <div className="col-md-12"> <span className="readmore_dsn">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <aside className="readmore-text">
                                    <p className="text-left font-light"> We have highly experienced professionals/Building contractors to help assist you at all stages throughout the process.</p>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

Whychooseus.propTypes = propTypes;
Whychooseus.defaultProps = defaultProps;
 
export default Whychooseus;


