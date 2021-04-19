import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { addFavourite, addRating, addHover } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
  addRating: payload => dispatch(addRating(payload)),
  addHover: payload => dispatch(addHover(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
