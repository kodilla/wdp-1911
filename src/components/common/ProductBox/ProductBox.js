import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const addFurnitureToFavourite = (id, isFavourite, event, addFavourite) => {
  event.preventDefault();
  addFavourite({ id: id, isFavourite: !isFavourite });
};

const addFurnitureToCompare = (id, compare, event, addCompare) => {
  event.preventDefault();
  addCompare({ id: id, compare: !compare });
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
  addCompare,
  isFavourite,
  isFavorite,
  compare,
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
          <Button
            variant={compare ? 'outlineCompare' : 'outline'}
            onClick={event => addFurnitureToCompare(id, compare, event, addCompare)}
          >
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
  addCompare: PropTypes.func,
  id: PropTypes.string,
  isFavourite: PropTypes.bool,
  isFavorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
