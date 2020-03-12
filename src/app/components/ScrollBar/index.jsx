import React, { Component } from 'react';
import './styles/styles.scss';

export default class ScrollBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      scrollEnabled: this.props.scrollEnabled || true
    };
    this.first = true;
    this.scroll = this.scroll.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (
      props.hasOwnProperty('scrollEnabled') &&
      props.scrollEnabled !== state.scrollEnabled
    ) {
      return { scrollEnabled: props.scrollEnabled };
    }
    return state;
  }
  componentDidUpdate() {
    this.checkForDisableScroll(this.state.scrollEnabled);
  }
  checkForDisableScroll(bool = false) {
    if (bool) {
      document.body.classList.remove('custom-scrollbar-overflow-hidden');
      if (this.first) {
        window.scrollTo(0, 0);
        this.first = false;
      }
    } else {
      document.body.classList.add('custom-scrollbar-overflow-hidden');
    }
  }
  componentDidMount() {
    this.addScroll();
  }
  componentWillUnmount() {
    this.removeScroll();
  }
  addScroll() {
    document.body.classList.add('custom-scrollbar');
    document.body.parentElement.classList.add('custom-scrollbar');
    document.addEventListener('scroll', this.scroll);
  }
  removeScroll() {
    document.body.classList.remove('custom-scrollbar');
    document.body.parentElement.classList.remove('custom-scrollbar');
    document.removeEventListener('scroll', this.scroll);
  }
  scroll(e) {
    let top = window.scrollY,
      height = document.body.scrollHeight,
      offset = window.innerHeight,
      position = (100 * top) / (height - offset);
    this.setState({
      position
    });
  }
  render() {
    let { position, scrollEnabled } = this.state;
    return (
      <div
        className={[
          'scroll-bar',
          !scrollEnabled ? 'scroll-bar__disabled' : ''
        ].join(' ')}
      >
        <div
          className="scroll-bar-inner"
          style={{
            height: position + '%'
          }}
        ></div>
      </div>
    );
  }
}
