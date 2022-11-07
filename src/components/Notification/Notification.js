import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

class Notification extends Component {
  render() {
    return <h2 className={css.notification}>{this.props.message}</h2>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
