import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from './sections/Hero';
import './styles/styles.scss';
import ClassToggler from 'components/ClassToggler';
class Index extends Component {
  render() {
    return (
      <>
        <Hero {...this.props} />
      </>
    );
  }
}

export default Index;
