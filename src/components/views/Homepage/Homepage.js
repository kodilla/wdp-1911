import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromoBox from '../../features/PromoBox/PromoBoxContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import BrandMarks from '../../features/BrandMarks/BrandMarks';

import FurnitureGallery from './../../features/FurnitureGallery/FurnitureGalleryContainer';
import Deals from '../../features/Deals/DealsBox';

const Homepage = () => (
  <div className={styles.root}>
    <PromoBox />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <BrandMarks />
    <Feedback />
    <FurnitureGallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
