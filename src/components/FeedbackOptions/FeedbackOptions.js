import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <div className={css.feedback__options}>
          {this.props.options.map(name => (
            <button
              key={name}
              name={name}
              className={css.feedback__btn}
              type="button"
              onClick={this.props.onLeaveFeedback}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          ))}
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
