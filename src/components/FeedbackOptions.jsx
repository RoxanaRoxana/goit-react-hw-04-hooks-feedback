import styles from './App.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <button type="button" onClick={options} className={styles.option__button}>
        {onLeaveFeedback}
      </button>
    </>
  );
};






FeedbackOptions.propTypes = {
  options: PropTypes.func,
  onLeaveFeedback: PropTypes.string,
};