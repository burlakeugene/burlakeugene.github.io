import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './styles/styles.scss';

class Logo extends Component {
  render() {
    let { isMini, isCentered, isLoading } = this.props;
    return (
      <div
        className={[
          'logo',
          isMini ? 'logo__minify' : '',
          isCentered ? 'logo__centered' : '',
          isLoading ? 'logo__loading' : ''
        ].join(' ')}
      >
        <Link to={'/'}>
          <div>
            <span>burlak</span>
            <span>.</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(state => {
  return {
    isMini: state.appReducer.loading.logoMini,
    isCentered: state.appReducer.loading.headerWide,
    isLoading: state.appReducer.loading.logoLoading
  };
})(Logo);
