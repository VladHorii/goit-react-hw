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

export default Statistics;
