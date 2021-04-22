import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsCompare from '../ProductsCompare/ProductsCompareContainer';

class MainLayout extends React.Component {
  checkMode = val => {
    return val <= 767 ? 'mobile' : val <= 1024 ? 'tablet' : 'desktop';
  };

  componentWillMount() {
    const { setRwdMode } = this.props;
    window.addEventListener('resize', e => {
      const mode = this.checkMode(e.target.window.innerWidth);
      setRwdMode(mode);
      return null;
    });
  }

  componentDidMount() {
    const event = new Event('resize');
    window.dispatchEvent(event);
  }
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
        <Footer />
        <ProductsCompare />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  setRwdMode: PropTypes.func,
};

export default MainLayout;
