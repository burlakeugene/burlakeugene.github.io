import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from './sections/Hero';
import './styles/styles.scss';

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
      </React.Fragment>
    );
  }
}

export default Index;
