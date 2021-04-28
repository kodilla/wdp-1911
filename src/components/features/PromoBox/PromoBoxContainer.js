import { connect } from 'react-redux';

import PromoBox from './PromoBox';

import { getNew, saleProducts, promoProducts } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
  saleProducts: saleProducts(state),
  promoProducts: promoProducts(state),
});

export default connect(mapStateToProps)(PromoBox);
