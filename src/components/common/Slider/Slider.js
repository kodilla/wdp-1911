import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

const Slider = ({ leftAction, rightAction, children }) => {
  return (
    <div className={styles.component}>
      <button className={styles.button} onClick={leftAction}>
        Left
      </button>
      {console.log(children.props)}
      <button className={styles.button} onClick={rightAction}>
        Right
      </button>
      {children}
    </div>
  );
};

Slider.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.any,
};

export default Slider;
