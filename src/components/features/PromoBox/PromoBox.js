import React from 'react';
import PropTypes from 'prop-types';

import PromoProductBox from '../../common/PromoProductBox/PromoProductBox';
import PromoGallery from '../../common/PromoGallery/PromoGallery';
import styles from './PromoBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

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
    const { products } = this.props;
    const { activeProduct, activePromoImage } = this.state;

    const saleProducts = products.filter(item => item.promo === 'sale');
    const promoProducts = products.filter(item => item.promo === 'promo');
    const salesCount = saleProducts.length;

    const dots = [];
    for (let i = 0; i < salesCount; i++) {
      dots.push(
        <li>
          <a className={i === activeProduct && styles.active}>product {i}</a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.promoWrapper}>
            <div className={styles.productBox}>
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
            <div className={styles.galleryBox}>
              {promoProducts.slice(activePromoImage, activePromoImage + 1).map(item => (
                <div key={item.id}>
                  <PromoGallery {...item} />
                </div>
              ))}
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
    );
  }
}

export default PromoBox;
