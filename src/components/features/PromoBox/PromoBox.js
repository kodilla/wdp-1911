import React from 'react';
import PropTypes from 'prop-types';

import PromoProductBox from '../../common/PromoProductBox/PromoProductBox';
import PromoImageBox from '../../common/PromoImageBox/PromoImageBox';

import styles from './PromoBox.module.scss';

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
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={'col-4' + styles.boxPadding}>
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
      </div>
    );
  }
}

export default PromoBox;
