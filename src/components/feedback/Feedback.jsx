import { Component } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percent = (good * 100) / this.countTotalFeedback();
    return percent;
  };

  incrementFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = Math.round(this.countPositiveFeedbackPercentage());
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            optoins={{ good, neutral, bad }}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
