import React, { Component } from 'react';
import { goTo } from 'actions/App';
import './styles/styles.scss';
export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  static getDerivedStateFromProps(props, state) {
    return props;
  }
  render() {
    let { state } = this;
    return (
      <a
        className={['link', state.arrow ? 'link__with-arrow' : ''].join(' ')}
        href={state.external ? state.to : '#'}
        onClick={(e) => {
          if(!state.external){
            e.preventDefault();
            goTo(state.to);
          }
        }}
        target={state.target}
      >
        <span data-hover={state.text}>{state.text}</span>
      </a>
    );
  }
}
