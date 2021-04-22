import { connect } from 'react-redux';

import PromoBox from './PromoBox';

import { getNew } from '../../../redux/productsRedux.js';
import { addFavourite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoBox);
