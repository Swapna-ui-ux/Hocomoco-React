import React from 'react';

import PropTypes from 'prop-types';
import Menu from './Menu';
import Footer from './Footer';
const propTypes = {};
const defaultProps = {};
const Layout = ({children}) => {
    return (
        <>
            <div className="page-wraper">         
            <Menu></Menu>
            <div className="page-content">
            {children}
            
            <Footer></Footer>
            </div>
            </div>
        </>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;


export default Layout;