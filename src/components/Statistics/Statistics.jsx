import PropTypes from 'prop-types';

import {
  MdSentimentSatisfied,
  MdSentimentNeutral,
  MdSentimentDissatisfied,
  MdMood,
} from 'react-icons/md';
import Notification from '../Notification';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      {total ? (
        <ul>
          <li>
            <MdSentimentSatisfied />
            Good: {good}
          </li>
          <li>
            <MdSentimentNeutral />
            Neutral: {neutral}
          </li>
          <li>
            <MdSentimentDissatisfied />
            Bad: {bad}
          </li>
          <li>Total: {total}</li>
          <li>
            <MdMood />
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
