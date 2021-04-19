import { connect } from 'react-redux';

import ProductsCompare from './ProductsCompare';

import { getCompare, addCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  compareProducts: getCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addCompare: payload => dispatch(addCompare(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCompare);
