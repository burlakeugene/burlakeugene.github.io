import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassToggler from 'components/ClassToggler';
import Blob from 'components/Blob';
import './styles/styles.scss';

class Hero extends Component {
  render() {
    let { contentHidden } = this.props;
    return (
      <section className="section section__hero">
        <div className="hero">
          <div className="hero-left">
            <ClassToggler
              defaultClass="hero-line"
              toggleClass={contentHidden ? '' : 'hero-line__visible'}
            >
              <div>Hi</div>
              <div>i'm</div>
            </ClassToggler>
          </div>
          <div className="hero-right">
            <ClassToggler
              defaultClass="hero-line hero-line__big"
              toggleClass={contentHidden ? '' : 'hero-line__visible'}
            >
              <div>Front-end</div>
            </ClassToggler>
            <ClassToggler
              defaultClass="hero-label"
              toggleClass={contentHidden ? '' : 'hero-label__visible'}
            >
              <div className="hero-label-inner">Developer</div>
            </ClassToggler>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(state => {
  return {
    contentHidden: state.appReducer.loading.contentHidden
  };
})(Hero);
