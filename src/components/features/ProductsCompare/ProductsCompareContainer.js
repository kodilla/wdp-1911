import { connect } from 'react-redux';

import ProductsCompare from './ProductsCompare';

import { getCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  compareProducts: getCompare(state),
});

export default connect(mapStateToProps)(ProductsCompare);
