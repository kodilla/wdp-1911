import ProductBox from './ProductBox';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { getFavourites, addFournitureToFavourite } from '../../../redux/favouriteRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  favourites: getFavourites(state),
});

const mapDispatchToProps = dispatch => ({
  addFournitureToFavourite: id => dispatch(addFournitureToFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
