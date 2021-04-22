import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoImageBox.module.scss';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const PromoImageBox = ({ photoUrl }) => (
  <div className={styles.root}>
    <div className={styles.photo} style={{ backgroundImage: `url(${photoUrl})` }}>
      fffffffff
    </div>
  </div>
);

PromoImageBox.propTypes = {
  photoUrl: PropTypes.string,
};

export default PromoImageBox;
