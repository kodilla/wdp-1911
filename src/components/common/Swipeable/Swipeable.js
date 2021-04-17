/* This is Swipeable component, to use it, import it and give him props leftAction and rightAction  */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';

class Swipeable extends React.Component {
  SwipeStart = this.SwipeStart.bind(this);
  SwipeEnd = this.SwipeEnd.bind(this);
  actionSwipe = this.actionSwipe.bind(this);
  state = {
    start: 0,
    end: 0,
  };

  SwipeEnd(event) {
    const { end } = this.state;
    let xEnd = event.touches[0].clientX;

    if (end !== xEnd) {
      this.setState({ end: xEnd });
    }
  }

  SwipeStart(event) {
    const { start } = this.state;
    const xStart = event.touches[0].clientX;

    if (start !== xStart) {
      this.setState({ start: xStart });
    }
  }

  actionSwipe(action1, action2) {
    const { start, end } = this.state;
    let calculate = end - start;
    const swipeSensitivity = 75;

    if (calculate > swipeSensitivity && start !== 0 && end !== 0) {
      action2();
      this.setState({ start: 0, end: 0 });
    } else if (calculate < -swipeSensitivity && start !== 0 && end !== 0) {
      action1();
      this.setState({ start: 0, end: 0 });
    }
  }

  render() {
    return (
      <div
        className={styles.component}
        onTouchStart={this.SwipeStart}
        onTouchMove={this.SwipeEnd}
        onTouchEnd={this.actionSwipe(this.props.leftAction, this.props.rightAction)}
      >
        {this.props.children}
      </div>
    );
  }
}

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.any,
};

export default Swipeable;
