import { connect } from 'react-redux';

import PromoBox from './PromoBox';

import { getNew } from '../../../redux/productsRedux.js';
import { getAll } from '../../../redux/promoImagesRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
  promoImages: getAll(state),
});

export default connect(mapStateToProps)(PromoBox);
