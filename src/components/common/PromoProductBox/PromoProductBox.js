import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const PromoProductBox = ({
  name,
  price,
  stars,
  photoBackground,
  oldPrice,
  isFavourite,
  compare,
}) => (
  <div className={styles.root}>
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url(${photoBackground})`,
      }}
    >
      <div className={styles.buttons}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
      <div className={styles.countdown}>
        <div className={styles.number}>
          <p>24 Days</p>
        </div>
        <div className={styles.number}>
          <p>10 hours</p>
        </div>
        <div className={styles.number}>
          <p>15 mins</p>
        </div>
        <div className={styles.number}>
          <p>46 secs</p>
        </div>
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
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faEye}>Quick View</FontAwesomeIcon>
          </Button>
          <Button
            variant={isFavourite ? 'outlineFavourites' : 'outline'}
            className={styles.button}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={isFavourite ? styles.isFavourite : ''}
            >
              Favourite
            </FontAwesomeIcon>
          </Button>
          <Button className={styles.button} variant='outline'>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className={compare ? styles.compare : ''}
            >
              Add to compare
            </FontAwesomeIcon>
          </Button>
        </div>
      </div>
      {oldPrice && <div className={styles.oldprice}>$ {oldPrice}</div>}
      <div className={styles.price}>
        <Button noHover variant='small' className={styles.buttonPrice}>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

PromoProductBox.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  photoBackground: PropTypes.string,
  addFavourite: PropTypes.func,
  id: PropTypes.string,
  isFavourite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default PromoProductBox;
