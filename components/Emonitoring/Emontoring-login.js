import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Emontoringlogin = () => {
    return (
        <>
           <div className="section-full p-b40 inner-page-padding bg-white" style={{"padding-top":"5px"}}> 
            <div className="row main-content bg-success text-center">
            <div className="col-md-6 text-center company__info" style={{"background-image":"url( https://www.hocomoco.in/new-assets/assets/back-bg.jpg)"}}>
                <span className="company__logo">                
                    <h5 className="emontor-login">
                    If you have an ongoing project with HOCOMOCO, Please use your login credentials to track your work progress. 
                    </h5>
                </span>
                 
            </div>
            <div className="col-md-6 col-xs-12 col-sm-12 login_form ">
                <div className="container-fluid">
                    <div className="row">
                        <h2>Log In</h2>
                    </div>
                    <div className="row">
                        <form control="" className="form-group">
                            <div className="row">
                                <input type="text" name="username" id="username" className="form__input" placeholder="Username"/>
                            </div>
                            <div className="row">
                                 
                                <input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
                            </div>
                            <div className="row"> 
                               <div className="col-md-12 col-xs-12 col-sm-12 text-right"> 
                                <label htmlFor="remember_me">Forgot Password ?</label>
                              </div>
                            </div>
                            <div className="row m-t30"> 
                                <button name="submit" type="submit" defaultValue="Submit" className="site-button btn-effect">submit </button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div> 
       </div>
        </>
    );
}

Emontoringlogin.propTypes = propTypes;
Emontoringlogin.defaultProps = defaultProps;
 
export default Emontoringlogin;