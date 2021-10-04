import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Projectcontent from '../components/Projectdetails/Projectcontent';
import Projectgallery from '../components/Projectdetails/Projectgallery';
 
const propTypes = {};

const defaultProps = {};
 
const Projectdetails = () => {
    return (
        <>
         <Innerbanner></Innerbanner>
         <Projectcontent></Projectcontent>
         <Projectgallery></Projectgallery>
         
        </>
    );
}

Projectdetails.propTypes = propTypes;
Projectdetails.defaultProps = defaultProps;
 

export default Projectdetails;