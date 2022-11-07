import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <>
        <h2 className={css.feedback__title}>{this.props.title}</h2>
        {this.props.children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;
