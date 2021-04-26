import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoGallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const PromoGallery = ({ photoBackground, name, id }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={photoBackground} alt={name} />
    </div>
  </div>
);

PromoGallery.propTypes = {
  photoBackground: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default PromoGallery;
