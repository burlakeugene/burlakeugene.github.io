import React, { Component } from 'react';
import Socials from 'components/Socials';
import { connect } from 'react-redux';
import './styles/styles.scss';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { footerOverlay } = this.props;
    return (
      <footer className={['app-footer', footerOverlay ? 'app-footer__overlay' : ''].join(' ')}>
        <Socials />
      </footer>
    );
  }
}

export default connect(state => {
  return {
    footerOverlay: state.appReducer.loading.footerOverlay
  };
})(Footer);
