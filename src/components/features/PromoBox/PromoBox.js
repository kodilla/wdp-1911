import React from 'react';
import PropTypes from 'prop-types';

import PromoProductBox from '../../common/PromoProductBox/PromoProductBox';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

import styles from './PromoBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PromoBox extends React.Component {
  propTypes = {
    products: PropTypes.array,
    promoImages: PropTypes.array,
    addFavourite: PropTypes.func,
  };

  state = {
    activeProduct: 0,
    activePromoImage: 0,
  };

  render() {
    const { products, promoImages } = this.props;
    const { activeProduct, activePromoImage } = this.state;

    const saleProducts = products.filter(item => item.promo === 'sale');
    const productsCount = saleProducts.length;

    const dots = [];
    for (let i = 0; i < productsCount; i++) {
      dots.push(
        <li>
          <a className={i === activeProduct && styles.active}>product {i}</a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.promoItem}>
              <div className={'col-3' + styles.paddingZero}>
                <div className={styles.promoTitle}>
                  <div className={styles.heading}>
                    <h3>Hot Deals</h3>
                  </div>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
                {saleProducts.slice(activeProduct, activeProduct + 1).map(item => (
                  <div key={item.id}>
                    <PromoProductBox {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.promoItemTwo}>
              <div className={styles.photos}>
                {promoImages.slice(activePromoImage, activePromoImage + 1).map(item => (
                  <div key={item.id}>
                    <div>
                      <img src={item.photoUrl} className={styles.photo} alt='obrazek' />
                    </div>
                  </div>
                ))}
                <div className={styles.promoDescription}>
                  <p>
                    indoor <span>furniture</span>
                  </p>
                  <p>save up to 50% of all furniture</p>
                </div>
                <Button variant='small' className={styles.shopButton}>
                  shop now
                </Button>
                <div className={styles.galleryButtons}>
                  <Button className={styles.button}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <Button className={styles.button}>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoBox;
