import React from 'react';
import PropTypes from 'prop-types';
import PromoProductBox from '../../common/PromoProductBox/PromoProductBox';

import styles from './PromoBox.module.scss';

class PromoBox extends React.Component {
  propTypes = {
    products: PropTypes.any,
    addFavourite: PropTypes.func,
  };

  state = {
    activeProduct: 0,
  };

  handleProductChange(product) {
    this.setState({ activeProduct: product }); //tymczasowe
  }

  render() {
    const { products, addFavourite } = this.props;
    const { activeProduct } = this.state;

    const saleProducts = products.filter(item => item.promo === 'sale');
    const productsCount = Math.ceil(saleProducts.length);

    const dots = [];
    for (let i = 0; i < productsCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handleProductChange(i)} //tymczasowe
            className={i === activeProduct && styles.active}
          >
            product {i}
          </a>
        </li>
      );
    }
    return (
      <div className='container'>
        <div className={styles.wrapper}>
          <div className='col-3'>
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
                <PromoProductBox {...item} addFavourite={addFavourite} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PromoBox;
