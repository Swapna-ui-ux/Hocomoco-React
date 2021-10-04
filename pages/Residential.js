import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Submityourrequest from '../components/Residential/Submityourrequest';
import Residentialportfolio from '../components/Residential/Residential-portfolio'; 
import Howitworks from '../components/Residential/Howitworks';
import Whychooseus from '../components/Home/Whychooseus'
import Homeblog from '../components/Home/Homeblog'
 
const propTypes = {};

const defaultProps = {};
 
const Residential = () => {
    return (
        <>
           <Innerbanner></Innerbanner>
           <Submityourrequest></Submityourrequest>
           <Residentialportfolio></Residentialportfolio> 
           <Howitworks></Howitworks>
           <Whychooseus></Whychooseus>
           <Homeblog></Homeblog>

        </>
    );
}

Residential.propTypes = propTypes;
Residential.defaultProps = defaultProps;
 
export default Residential;