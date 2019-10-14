import React, { Component } from 'react';
import { InView } from 'burlak';
import './styles/styles.scss';

export default class Fluid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: false,
      defaultClass: props.defaultClass,
      toggleClass: props.toggleClass
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (
      props.defaultClass !== state.defaultClass ||
      props.toggleClass !== state.toggleClass
    ) {
      let newState = {};
      newState.defaultClass = props.defaultClass;
      newState.toggleClass = props.toggleClass;
      return newState;
    }
    return state;
  }
  observer() {
    this.refs.target &&
      new InView(this.refs.target, {
        offset: window.innerHeight / 10,
        in: e => {
          this.setState({
            inView: true
          });
        },
        out: (e, direction) => {
          this.setState({
            inView: false
          });
        }
      });
  }
  componentDidMount() {
    this.observer();
  }
  render() {
    let { inView, defaultClass, toggleClass } = this.state,
      className = defaultClass;
    if (inView) className += ' ' + toggleClass;
    return (
      <div ref="target" className={className}>
        {this.props.children}
      </div>
    );
  }
}
