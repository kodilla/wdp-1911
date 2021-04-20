import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './StarRating.modules.scss';
import PropTypes from 'prop-types';

const addMyRatingToState = (id, addRating, value, myRating, event) => {
  event.preventDefault();
  addRating({ id: id, myRating: value });
};

const colorSet = (rating, value, stars) => {
  if ((rating && rating < value) || (!rating && stars < value)) {
    return '#F2F2F2';
  } else if (!rating && stars < value) {
    return '#000000';
  } else if (rating & (rating >= value)) {
    return '#e6e29c';
  }
};
const starsArray = [1, 2, 3, 4, 5];

const StarRating = ({ myRating, stars, addRating, id }) => (
  <div className={styles.starRatio}>
    {starsArray.map(star => (
      <label key={star} className={styles.starIcon}>
        <input
          type='radio'
          name='rating'
          value={starsArray.indexOf(star) + 1}
          onClick={event =>
            addMyRatingToState(
              id,
              addRating,
              starsArray.indexOf(star) + 1,
              myRating,
              event
            )
          }
        />
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: colorSet(myRating, starsArray.indexOf(star) + 1, stars) }}
        ></FontAwesomeIcon>
      </label>
    ))}
  </div>
);
StarRating.propTypes = {
  myRating: PropTypes.any,
  stars: PropTypes.number,
  addRating: PropTypes.func,
  id: PropTypes.string,
};

export default StarRating;
