import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Aboutcontent from '../components/Aboutus/Aboutcontent';
import Joinourteam from '../components/Aboutus/Joinourteam';
 
const propTypes = {};

const defaultProps = {};
 
const Aboutus = () => {
    return (
		
        <>
        <Innerbanner></Innerbanner>	 
		<Aboutcontent></Aboutcontent>
		<Joinourteam></Joinourteam>
        </>
    );
}

Aboutus.propTypes = propTypes;
Aboutus.defaultProps = defaultProps;
 

export default Aboutus;