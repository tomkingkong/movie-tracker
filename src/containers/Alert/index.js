import React from 'react';
import { connect } from 'react-redux';

export const Alert = ({ alertMsg }) => {
  return (
    <h4>{ alertMsg }</h4>
  )
}

export const mapStateToProps = ({ alertMsg }) => ({ alertMsg })

export default connect(mapStateToProps, null)(Alert);