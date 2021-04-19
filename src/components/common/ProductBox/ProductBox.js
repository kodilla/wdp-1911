import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

const addFurnitureToFavourite = (id, isFavourite, event, addFavourite) => {
  event.preventDefault();
  addFavourite({ id: id, isFavourite: !isFavourite });
};

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  photoBackground,
  oldPrice,
  id,
  addFavourite,
  isFavourite,
  isFavorite,
  compare,
  myRating,
  addRating,
  addHover,
  myHover,
}) => (
  <div className={styles.root}>
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url(${photoBackground})`,
      }}
    >
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {/* {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))} */}
        <StarRating
          myRating={myRating}
          stars={stars}
          addRating={addRating}
          id={id}
          addHover={addHover}
          myHover={myHover}
        />
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <div>
          <Button
            variant={isFavourite ? 'outlineFavourites' : 'outline'}
            onClick={event =>
              addFurnitureToFavourite(id, isFavourite, event, addFavourite)
            }
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={isFavorite ? styles.isFavorite : ''}
            >
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className={compare ? styles.compare : ''}
            >
              Add to compare
            </FontAwesomeIcon>
          </Button>
        </div>
      </div>

      <div className={styles.price}>
        <Button noHover variant='small' className={styles.buttonPrice}>
          $ {price}
        </Button>
      </div>
      {oldPrice && (
        <div className={styles.oldprice}>
          <Button noHover variant='small' className={styles.buttonPrice}>
            $ {oldPrice}
          </Button>
        </div>
      )}
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  photoBackground: PropTypes.string,
  addFavourite: PropTypes.func,
  id: PropTypes.string,
  isFavourite: PropTypes.bool,
  isFavorite: PropTypes.bool,
  compare: PropTypes.bool,
  myRating: PropTypes.any,
  addRating: PropTypes.func,
  addHover: PropTypes.func,
  myHover: PropTypes.any,
};

export default ProductBox;
