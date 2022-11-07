import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from 'components/Notification';

class Statistics extends Component {
  countTotalFeedback = () => {
    return this.props.good + this.props.neutral + this.props.bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.ceil((this.props.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.props;
    const total = this.countTotalFeedback();
    const positivePercentage = good
      ? this.countPositiveFeedbackPercentage(total)
      : 0;

    if (total === 0) {
      return <Notification message="There is no feedback" />;
    }

    return (
      <div className={css.statistics}>
        <ul className={css.statistics__list}>
          <li className={css.statistics__item}>Good: {good}</li>
          <li className={css.statistics__item}>Neutural: {neutral}</li>
          <li className={css.statistics__item}>Bad: {bad}</li>
          <li className={css.statistics__item}>Total: {total}</li>
          <li className={css.statistics__item}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  //total: PropTypes.number.isRequired,
  //positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
