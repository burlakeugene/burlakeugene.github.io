import React, { Component } from 'react';
import './styles/styles.scss';

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.active !== state.active) {
      return { active: props.active };
    }
    return state;
  }

  render() {
    let { className = false, onClick = false } = this.props,
      { active = false } = this.state;
    className = className ? 'hamburger ' + className : 'hamburger';
    className += active ? ' hamburger__active' : '';
    return (
      <a
        className={className}
        onClick={e => {
          onClick && onClick(e);
        }}
      >
        <span />
        <span />
      </a>
    );
  }
}
