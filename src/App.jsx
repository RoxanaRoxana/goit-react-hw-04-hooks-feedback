import { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import styles from './components/App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementGood = e => {
    setGood(good + 1);
  };

  const handleIncrementNeutral = e => {
    setNeutral(neutral + 1);
  };

  const handleIncrementBad = e => {
    setBad(bad + 1);
  };

  const countTotalFeedback = e => {
    const total = neutral + good + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = e => {
    const total = countTotalFeedback();
    const goodFeedback = good;

    const positivePercentage = (goodFeedback / total) * 100;
    return Math.round(positivePercentage);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <div className={styles.options}>
          <FeedbackOptions
            options={handleIncrementGood}
            onLeaveFeedback="Good"
          />
          <FeedbackOptions
            options={handleIncrementNeutral}
            onLeaveFeedback="Neutral"
          />
          <FeedbackOptions options={handleIncrementBad} onLeaveFeedback="Bad" />
        </div>
      </Section>

      <Section title="Statistisc">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
