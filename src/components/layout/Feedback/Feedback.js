import React from 'react';
import Swipeable from './../../common/Swipeable/Swipeable';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  leftAction = this.changePagePrev.bind(this);
  rightAction = this.changePageNext.bind(this);
  state = {
    activePage: 0,
  };

  handlePageChange(page) {
    this.setState({ activePage: page });
  }

  changePagePrev() {
    let currentPage = this.state.activePage;
    const { comments } = this.props;
    const pagesCount = Math.ceil(comments.length / 1);

    if (currentPage < pagesCount - 1) {
      this.handlePageChange(currentPage + 1);
    }
  }

  changePageNext() {
    let currentPage = this.state.activePage;

    if (currentPage !== 0) {
      this.handlePageChange(currentPage - 1);
    }
  }

  render() {
    const { comments } = this.props;
    const { activePage } = this.state;
    const pagesCount = Math.ceil(comments.length / 1);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <Swipeable leftAction={this.leftAction} rightAction={this.rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3> Client Feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <p className={styles.apostrof}>&quot;</p>

            {comments.slice(activePage, activePage + 1).map(item => (
              <div key={item.id} className='container'>
                <div className='row'>
                  <div className='col'>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <img src={item.profilePic} />
                  </div>
                  <div className='col-6'>
                    {item.name}
                    <br />
                    {item.client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Swipeable>
    );
  }
}

Feedback.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      profilePic: PropTypes.string,
      name: PropTypes.string,
      cielnt: PropTypes.string,
    })
  ),
};

export default Feedback;
