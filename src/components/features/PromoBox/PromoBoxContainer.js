import { connect } from 'react-redux';

import PromoBox from './PromoBox';

import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(PromoBox);
