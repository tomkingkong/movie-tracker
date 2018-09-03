import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Alert = ({ alertMsg }) => {
  return (
    <h4>{ alertMsg }</h4>
  );
};

Alert.propTypes = {
  alertMsg: PropTypes.string 
};

export const mapStateToProps = ({ alertMsg }) => ({ alertMsg });

export default connect(mapStateToProps, null)(Alert);

