import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductToCompare.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductToCompare = ({
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
    ></div>
  </div>
);

ProductToCompare.propTypes = {
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

export default ProductToCompare;
