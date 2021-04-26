import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
<<<<<<< HEAD
import Feedback from '../../layout/Feedback/FeedbackContainer';
import BrandMarks from '../../features/BrandMarks/BrandMarks';

=======
import FurnitureGallery from './../../features/FurnitureGallery/FurnitureGalleryContainer';
>>>>>>> 2b62190 (during changes)

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
<<<<<<< HEAD
    <BrandMarks />
    <Feedback />
=======
    <FurnitureGallery />
>>>>>>> 2b62190 (during changes)
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
