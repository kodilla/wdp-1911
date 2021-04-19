import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCompare.module.scss';
import Button from '../../common/Button/Button';
import ProductToCompare from '../../common/ProductToCompare/ProductToCompare';

class ProductsCompare extends React.Component {
  render() {
    const { compareProducts, addCompare } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            {compareProducts &&
              compareProducts.map(item => (
                <div key={item.id} className={`col-2 ${styles.ProductToCompare}`}>
                  <ProductToCompare {...item} addCompare={addCompare} />
                </div>
              ))}
            {() => {
              if (compareProducts.length) {
                return <Button>Compare</Button>;
              }
            }}
          </div>
        </div>
      </div>
    );
  }
}

ProductsCompare.propTypes = {
  compareProducts: PropTypes.array,
  addCompare: PropTypes.func,
};

export default ProductsCompare;
