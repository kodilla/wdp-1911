import ProductBox from './ProductBox';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { addFavourite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
