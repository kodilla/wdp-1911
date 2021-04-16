import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul>
        <li>
          <a href='#'>Select a category</a>

          <ul>
            <li>
              <a href='#'>Lorum ipsum</a>
            </li>
            <li>
              <a href='#'>Lorum ipsum</a>
            </li>
            <li>
              <a href='#'>Lorum ipsum</a>
            </li>
            <li>
              <a href='#'>Lorum ipsum</a>
            </li>
          </ul>
        </li>
      </ul>
      <select name='' id=''>
        <option value=''>Select a category</option>
        <option value='1'>Select a option</option>
        <option value='2'>Select a cat</option>
      </select>
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
