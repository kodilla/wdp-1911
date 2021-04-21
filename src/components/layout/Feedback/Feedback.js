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
    const { Coments } = this.props;
    const pagesCount = Math.ceil(Coments.length / 1);

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
    const { activePage } = this.state;

    const Coments = [
      {
        id: 1,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profilePic:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Jan Kowalski',
        client: 'Feuture client',
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profilePic:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Anna Kowalska',
        client: 'Feuture client',
      },
      {
        id: 3,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profilePic:
          'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Jhon Smith',
        client: 'Feuture client',
      },
    ];
    const pagesCount = Math.ceil(Coments.length / 1);

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

            {Coments.slice(activePage, activePage + 1).map(item => (
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
  Coments: PropTypes.arrayOf(
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
