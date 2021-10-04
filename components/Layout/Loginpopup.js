import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Loginpopup = () => {
    return (
        <>
           <div id="login" className="modal fade" role="dialog">
        <div className="modal-dialog"> 
            <div className="modal-content" style={{"backgroundImage":"url(https://www.hocomoco.in/new-assets/assets/back-bg.jpg)","background-repeat": "no-repeat"}}>
                <div className="modal-header login-modalheader">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title text-black text-center font-30 text-uppercase">Login</h4> </div>
                <form id="loginform" name="loginform" action="https://www.hocomoco.in/home/user_login/" method="post" autoComplete="off" className="form-horizontal mb-lg p-t10">
                    <div className="modal-body m-b30">
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Email</label>
                            <div className="col-sm-9">
                                <input name="email" id="email" type="text" className="form-control" placeholder="Type your email..." required type="email"/> </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Password</label>
                            <div className="col-sm-9">
                                <input name="password" id="password" type="password" className="form-control" placeholder="Password" required type="number"/> </div>
                        </div>
                    </div>
                    <div className="modal-footer text-center">
                        <p className="header-login">( For Existing Customers Only )</p>
                        <input type="submit" className="site-button btn-effect text-uppercase button-sm letter-spacing-2 p-t20" id="login" name="Login" value="Login"/>
                        <p className="p-t20"><a href="">Forgot Password ?</a> </p>
                    </div>
                </form>
                 
            </div>
        </div>
    </div>
        </>
    );
}

Loginpopup.propTypes = propTypes;
Loginpopup.defaultProps = defaultProps;
 
export default Loginpopup;