import { useState } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function positiveFeedback() {
    const percent = (good * 100) / countTotalFeedback();
    return Math.round(percent);
  }

  function incrementFeedback(feedback) {
    switch (feedback) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          optoins={{ good, neutral, bad }}
          onLeaveFeedback={incrementFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={positiveFeedback()}
        />
      </Section>
    </div>
  );
}
