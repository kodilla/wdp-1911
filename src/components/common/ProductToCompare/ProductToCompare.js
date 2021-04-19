import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductToCompare.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';

const addFurnitureToCompare = (id, compare, event, addCompare) => {
  event.preventDefault();
  addCompare({ id: id, compare: !compare });
};

const ProductToCompare = ({ photoBackground, id, addCompare, compare }) => (
  <div className={styles.root}>
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url(${photoBackground})`,
      }}
    ></div>
    <Button onClick={event => addFurnitureToCompare(id, compare, event, addCompare)}>
      <FontAwesomeIcon icon={faWindowClose} className={styles.icon}></FontAwesomeIcon>
    </Button>
  </div>
);

ProductToCompare.propTypes = {
  photoBackground: PropTypes.string,
  addCompare: PropTypes.func,
  id: PropTypes.string,
  compare: PropTypes.bool,
};

export default ProductToCompare;
