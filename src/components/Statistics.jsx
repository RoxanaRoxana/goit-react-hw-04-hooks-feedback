import styles from './App.module.css';
import PropTypes from 'prop-types';


export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
   return (
     <div className={styles.statistics}>
       <span className={styles.statistic__item}>Good: {good} </span>
       <span className={styles.statistic__item}>Neutral: {neutral} </span>
       <span className={styles.statistic__item}>Bad: {bad} </span>
       <span className={styles.statistic__item}>Total: {total} </span>
       <span className={styles.statistic__item}>
         Positive feedback: {positivePercentage}%
       </span>
     </div>
   );
}



Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
