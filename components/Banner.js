
const propTypes = {};
const defaultProps = {};
const Banner = () => {
    return( <>
         <div className="">
                <div id="carousel-example-generic" className="carousel-fade carousel slide" data-ride="carousel">
          
                    <div className="carousel-inner" role="listbox">
                        <div className="item active"> <img src="assets/ho5.jpg" alt="..."/>
                            <div className="container">
                                <div className="carousel-caption col-md-6">
                                    <div className="carousel-caption-div">
                                        <h3 className="banner_heading">We Build Your <span>&apos;Dream Home&apos;</span></h3>
                                        <h5>All Your Construction Needs Under One Roof</h5> <a href="#ser_sec1" data-toggle="modal" data-target="#with-form" className="site-button btn-effect banner_btn">
                                Starts from Rs.1599/-sft</a> </div>
                                </div>
                                <div className="mobilevisibletext">
                                    <h5>All Your Construction Needs Under One Roof</h5></div>
                                <div className="banner-leadform">
                                    <div className="ribbon"><span>Book a free Consultation</span><span className="fold bottom right"></span><span className="fold bottom left"></span> </div>
                                    <form name="bannerform" id="bannerform" action="<?php echo base_url();?>Home/bannerrequest" method="POST" autoComplete="off()">
                                        <div className="row">
                                            <div className="form-group consult">
                                                <label className="control-label">Name</label>
                                                <input type="text" name="name" id="name" placeholder="Name" required className="form-control"/>
                                                 <span className="errorname">*Required Field (Name)</span> </div>
                                            <div className="form-group consult">
                                                <label className="control-label">Email</label>
                                                <input type="text" name="email" id="email" placeholder="Email" required className="form-control"/> <span className="erroremail">*Required Field (Email)</span> </div>
                                            <div className="form-group consult">
                                                <label className="control-label">Your current Location (Country of Residence) </label>
                                                <div className="row national">
                                                    <div className="col-sm-6 col-xs-6">
                                                        <label>
                                                            <input type="radio" className="option-input radio form-control" required name="residence" id="residence" value="India" />India</label>
                                                    </div>
                                                    <div className="col-sm-6 col-xs-6">
                                                        <label>
                                                            <input type="radio" className="option-input radio form-control" required name="residence" id="residence" value="International" />Outside India</label>
                                                    </div> <span className="errorres">*Required Field (Residence)</span> </div>
                                            </div>
                                            <div className="form-group consult">
                                                <label className="control-label">Mobile</label>
                                                <input type="text" name="phone" id="phone" required placeholder="Contact Number" onKeyPress="isNumberKey(event)" minLength="10" data-toggle="modal" data-target="#national" className="form-control"/> <span className="errorphone">*Required Field (Phone Number)</span> 
                                                <span className="errorphone1">*Required Field (Please enter Country Code)</span> </div> 
                                            <div className="form-group text-center m-l20">
                                                <input type="submit" id="bannersubmit" name="bannersubmit" className=" m-b20 m-t10 site-button btn-effect text-uppercase m-r25"/> </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
         
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> </a>
                </div>
            </div>
    </>);
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
export default Banner;