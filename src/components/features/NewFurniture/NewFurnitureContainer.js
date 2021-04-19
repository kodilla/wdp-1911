import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { addFavourite } from '../../../redux/productsRedux';
import { addRating } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
  addRating: payload => dispatch(addRating(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
