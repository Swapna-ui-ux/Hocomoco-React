import React from 'react'; 
import PropTypes from 'prop-types';
import Innerbanner from '../components/Layout/Innerbanner';
import Submityourrequest from '../components/Emonitoring/Submityourrequest';
import Emonitoringcontent from '../components/Emonitoring/Emonitoring-content';
import Emontoringlogin from '../components/Emonitoring/Emontoring-login';
import {Helmet} from "react-helmet";
const propTypes = {};

const defaultProps = {};
 
const Emonitoring = () => {
    return (
        <>
          <Helmet>

          </Helmet>
          <Innerbanner></Innerbanner>
          <Submityourrequest></Submityourrequest>
          <Emonitoringcontent></Emonitoringcontent>
          <Emontoringlogin></Emontoringlogin>
          
        </>
    );
}

Emonitoring.propTypes = propTypes;
Emonitoring.defaultProps = defaultProps; 

export default Emonitoring;