import React from 'react'; 
import Image from 'next/image'
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Projectgallery = () => {
    return (
        <>
          <div className="section-full mobile-page-padding p-t40 p-b40 square_shape2 bg-cover" style={{"background-image":"url(images/background/bg6.jpg);"}}>
	<div className="container">
		<div className="section-content">
			<div className="mt-tabs tabs-default">
				<ul className="nav nav-tabs">
					<li className="active"><a data-toggle="tab" href="#projectpics" aria-expanded="false">Project Gallery</a></li>
					<li className=""><a data-toggle="tab" href="#projectvideos" aria-expanded="false">Videos</a></li>
				</ul>
				<div className="tab-content">
					<div id="projectpics" className="tab-pane active">
						<div className="container m-t50">
							<section className="customer-logos slider">
								<div className="slide">
									<div className="portfolio-wrap mfp-gallery work-grid">
										<div className="masonry-item">
											<div className="mt-thum-bx  img-center-icon  mt-img-overlay2"> <Image  src="assets/portfolio/residential/image.jpg"/>
												<div className="overlay-bx">
													<div className="overlay-icon">
														<a className="mfp-link" href="assets/portfolio/residential/image.jpg"> <i className="fa fa-arrows-alt mt-icon-box-xs"></i> </a>
													</div>
												</div>
											</div>
											<h5 className="text-center">Residential Construction</h5> </div>
									</div>
								</div>
								<div className="slide">
									<div className="portfolio-wrap mfp-gallery work-grid">
										<div className="masonry-item">
											<div className="mt-thum-bx  img-center-icon  mt-img-overlay2"> <Image  src="assets/portfolio/residential/image1.jpg"/>
												<div className="overlay-bx">
													<div className="overlay-icon">
														<a className="mfp-link" href="assets/portfolio/residential/image1.jpg"> <i className="fa fa-arrows-alt mt-icon-box-xs"></i> </a>
													</div>
												</div>
											</div>
											<h5 className="text-center">Residential Construction</h5> </div>
									</div>
								</div>
								<div className="slide">
									<div className="portfolio-wrap mfp-gallery work-grid">
										<div className="masonry-item">
											<div className="mt-thum-bx  img-center-icon  mt-img-overlay2"> <Image  src="assets/portfolio/residential/image2.jpg"/>
												<div className="overlay-bx">
													<div className="overlay-icon">
														<a className="mfp-link" href="assets/portfolio/residential/image2.jpg"> <i className="fa fa-arrows-alt mt-icon-box-xs"></i> </a>
													</div>
												</div>
											</div>
											<h5 className="text-center">Residential Construction</h5> </div>
									</div>
								</div>
								<div className="slide">
									<div className="portfolio-wrap mfp-gallery work-grid">
										<div className="masonry-item">
											<div className="mt-thum-bx  img-center-icon  mt-img-overlay2"> <Image  src="assets/portfolio/residential/image2.jpg"/>
												<div className="overlay-bx">
													<div className="overlay-icon">
														<a className="mfp-link" href="assets/portfolio/residential/image2.jpg"> <i className="fa fa-arrows-alt mt-icon-box-xs"></i> </a>
													</div>
												</div>
											</div>
											<h5 className="text-center">Residential Construction</h5> </div>
									</div>
								</div>
								<div className="slide">
									<div className="portfolio-wrap mfp-gallery work-grid">
										<div className="masonry-item">
											<div className="mt-thum-bx  img-center-icon  mt-img-overlay2"> <Image  src="assets/portfolio/residential/image2.jpg"/>
												<div className="overlay-bx">
													<div className="overlay-icon">
														<a className="mfp-link" href="assets/portfolio/residential/image2.jpg"> <i className="fa fa-arrows-alt mt-icon-box-xs"></i> </a>
													</div>
												</div>
											</div>
											<h5 className="text-center">Residential Construction</h5> </div>
									</div>
								</div>
								 
							</section>
						</div>
					</div>
					<div id="projectvideos" className="tab-pane">
						<div className="m-b50 m-t50">
							<div className="row">
								<div className="col-md-6 m-b30">
									<div className="embed-responsive embed-responsive-16by9">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/s3A7AK1K2hc"></iframe>
									</div>
								</div>
								<div className="col-md-6 m-b30">
									<div className="embed-responsive embed-responsive-16by9">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/s3A7AK1K2hc"></iframe>
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

<div className="section-full needsrow m-b80">
                    <div className="container"> 
                        <div className="text-center needs-text">  
                           <h2>All your construction needs under one roof</h2>
                           <div className="estimate">
                                <a href="" className=""> Get a free estimate know</a>
                           </div>
                        </div> 
                     </div>
                </div>
        </>
    );
}

Projectgallery.propTypes = propTypes;
Projectgallery.defaultProps = defaultProps;
 
export default Projectgallery;