import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Hamburger from 'components/Hamburger';
import { contentHidden, logoMini } from 'actions/Loading';
import './styles/styles.scss';
import ClassToggler from 'components/ClassToggler';
import Blob from 'components/Blob';
import Socials from 'components/Socials';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: false
    };
  }
  navigationToggle() {
    if (!this.state.navigation) {
      this.setState(
        {
          navigation: true
        },
        () => {
          contentHidden(true);
          logoMini(false);
        }
      );
    } else {
      this.setState(
        {
          navigation: false
        },
        () => {
          contentHidden(false);
          logoMini(true);
        }
      );
    }
  }
  render() {
    let { isWide, preloaderShow } = this.props,
      { navigation } = this.state;
    return (
      <header
        className={[
          'app-header',
          isWide ? 'app-header__wide' : '',
          preloaderShow ? 'app-header__preloaderShow' : '',
          navigation ? 'app-header__navigation' : ''
        ].join(' ')}
      >
        <div className="app-header-inner">
          <div className="app-header-content">
            <div className="app-header-content-scroller">
              <div>
                Comming soon
                <Socials />
              </div>
            </div>
          </div>
          <div className="app-header-blob">
            <Blob />
          </div>
          <Logo />
          <Hamburger
            active={navigation}
            onClick={() => {
              this.navigationToggle();
            }}
          />
        </div>
      </header>
    );
  }
}

export default connect(state => {
  return {
    isWide: state.appReducer.loading.headerWide,
    preloaderShow: state.appReducer.loading.preloaderShow
  };
})(Header);
