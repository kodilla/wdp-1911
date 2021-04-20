import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { addFavourite, addCompare, removeCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
  addCompare: payload => dispatch(addCompare(payload)),
  removeCompare: payload => dispatch(removeCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
