import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './StarRating.modules.scss';
import PropTypes from 'prop-types';

const addMyRatingToState = (id, addRating, value, myRating, event) => {
  event.preventDefault();
  addRating({ id: id, myRating: value });
};

const colorSet = (rating, value, hoverRating, stars) => {
  if (hoverRating >= value) {
    return '#e6e29c';
  } else if (!hoverRating && rating >= value) {
    return '#e6e29c';
  } else if (!rating && stars >= value) {
    return '#000000';
  }
  return '#F2F2F2';
};

const starsArray = [1, 2, 3, 4, 5];

const StarRating = ({ myRating, stars, addRating, id }) => {
  const [hoverRating, setHoverRating] = React.useState(0);
  const setHover = star => {
    setHoverRating(star);
  };
  return (
    <div className={styles.starRatio}>
      {starsArray.map(star => (
        <label key={star} className={styles.starIcon}>
          <input
            type='radio'
            name='rating'
            value={star}
            onClick={event => addMyRatingToState(id, addRating, star, myRating, event)}
          />
          <FontAwesomeIcon
            icon={faStar}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            //className={colorSet(myRating, star, hoverRating)}
            style={{ color: colorSet(myRating, star, hoverRating, stars) }}
          ></FontAwesomeIcon>
        </label>
      ))}
    </div>
  );
};
StarRating.propTypes = {
  myRating: PropTypes.any,
  stars: PropTypes.number,
  addRating: PropTypes.func,
  id: PropTypes.string,
  setHover: PropTypes.func,
  hoverRating: PropTypes.number,
};

export default StarRating;
