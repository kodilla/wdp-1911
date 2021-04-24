import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';

import Gallery from '../Gallery/Gallery';
import Button from '../Button/Button';

const FurnitureGallery = ({
  products,
  activeCategorySales,
  addFavourite,
  addRating,
}) => {
  return (
    <div className={styles.root}>
      <div className='row'>
        <div className='col-6'>
          <Gallery
            activeCategorySales={activeCategorySales}
            products={products}
            addFavourite={addFavourite}
            addRating={addRating}
          />
        </div>
        <div className='col-6'>
          <div className={styles.announce}>
            <h2 className={styles.announceTitle}>
              FROM<span className={styles.announceSpan}> $50.80</span>
            </h2>
            <h3 className={styles.announceBed}>Bedroom Bed</h3>
            <Button className={styles.announceButton}>SHOP NOW</Button>
          </div>
          <div className={styles.productPhoto}>
            <div
              className={styles.photo}
              style={{
                backgroundImage:
                  'url(https://lectus24.pl/128227-large_default/lozko-tapicerowane-160x200-cm-ksavier-ze-stelazem-i-pojemnikiem-szare-welur.jpg)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

FurnitureGallery.propTypes = {
  products: PropTypes.any,
  activeCategorySales: PropTypes.string,
  addFavourite: PropTypes.func,
  addRating: PropTypes.func,
};

export default FurnitureGallery;
