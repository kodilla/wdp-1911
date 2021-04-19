import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCompare.module.scss';
import ProductToCompare from '../../common/ProductToCompare/ProductToCompare';

class ProductsCompare extends React.Component {
  render() {
    const { compareProducts } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            {compareProducts &&
              compareProducts.map(item => (
                <div key={item.id} className={`col-3 ${styles.ProductToCompare}`}>
                  <ProductToCompare {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

ProductsCompare.propTypes = {
  compareProducts: PropTypes.array,
};

export default ProductsCompare;
