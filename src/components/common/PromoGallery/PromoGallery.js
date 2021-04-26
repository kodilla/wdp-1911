import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoGallery.module.scss';
import Button from '../../common/Button/Button';

const PromoGallery = ({ photoBackground, name, id }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={photoBackground} alt={name} />
    </div>
    <div className={styles.photoDescription}>
      <p>
        Indoor <span>furniture</span>
      </p>
      <p>save up to 50% of all furniture</p>
      <Button variant='small' className={styles.button}>
        shop now
      </Button>
    </div>
  </div>
);

PromoGallery.propTypes = {
  photoBackground: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default PromoGallery;
