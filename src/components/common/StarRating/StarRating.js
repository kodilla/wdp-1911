import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './StarRating.modules.scss';
import PropTypes from 'prop-types';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const addMyRatingToState = (id, addRating, value, myRating, event) => {
  event.preventDefault();
  addRating({ id: id, myRating: value });
};

const starsArray = [1, 2, 3, 4, 5];

const StarRating = ({ myRating, stars, addRating, id }) =>
  myRating && myRating != null ? (
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
            className={styles.hoverEfect}
            color={myRating < starsArray.indexOf(star) + 1 ? 'grey' : 'gold'}
            onMouseEnter={() => console.log(starsArray.indexOf(star) + 1)}
          ></FontAwesomeIcon>
        </label>
      ))}
    </div>
  ) : (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= stars ? (
            <FontAwesomeIcon
              icon={faStar}
              onClick={event =>
                addMyRatingToState(
                  id,
                  addRating,
                  starsArray.indexOf(i) + 1,
                  myRating,
                  event
                )
              }
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={farStar}
              onClick={event =>
                addMyRatingToState(
                  id,
                  addRating,
                  starsArray.indexOf(i) + 1,
                  myRating,
                  event
                )
              }
            >
              {i} stars
            </FontAwesomeIcon>
          )}
        </a>
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
