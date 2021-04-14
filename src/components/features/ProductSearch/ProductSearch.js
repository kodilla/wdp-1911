import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ol>
        <li>
          <a href='#'>Select a category</a>

          <ul>
            <li>
              <a href='#'>Lorum ipsum</a>
            </li>
            <li>
              <a href='#'>Lorum ipsum2</a>
            </li>
            <li>
              <a href='#'>Lorum ipsum3</a>
            </li>
            <li>
              <a href='#'>Lorum ipsum4</a>
            </li>
          </ul>
        </li>
      </ol>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
