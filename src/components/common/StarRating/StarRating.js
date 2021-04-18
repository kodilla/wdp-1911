import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './StarRating.modules.scss';
import PropTypes from 'prop-types';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const setRating = value => {
  return alert(value);
};

const starsArray = [1, 2, 3, 4, 5];

const StarRating = ({ myRating, stars }) =>
  myRating && myRating != null ? (
    <div className={styles.starRatio}>
      {starsArray.map(star => (
        <label key={star} className={styles.starIcon}>
          <input
            type='radio'
            name='rating'
            value={starsArray.indexOf(star) + 1}
            onClick={() => setRating(starsArray.indexOf(star) + 1)}
          />
          <FontAwesomeIcon
            icon={faStar}
            onMouseEnter={() => alert(myRating)}
          ></FontAwesomeIcon>
        </label>
      ))}
    </div>
  ) : (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
StarRating.propTypes = {
  myRating: PropTypes.any,
  stars: PropTypes.number,
};

export default StarRating;
