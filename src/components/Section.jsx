import PropTypes from 'prop-types';
import styles from './App.module.css';

export default function Section({ title, children }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};




Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}
