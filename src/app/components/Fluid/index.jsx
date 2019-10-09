import React, { Component } from 'react';
import { InView } from 'burlak';
import './styles/styles.scss';

export default class Fluid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
  }
  observer() {
    this.refs.target &&
      new InView(this.refs.target, {
        offset: {
          top: window.innerHeight / 4,
          bottom: window.innerHeight / 4
        },
        in: e => {
          this.setState({
            inView: true,
            offset: {
              x: 0,
              y: 0
            }
          });
        },
        out: (e, direction) => {
          this.setState({
            inView: false,
            offset: {
              x: 0,
              y: direction === 'bottom' ? 20 : -20
            }
          });
        }
      });
  }
  componentDidMount() {
    this.observer();
  }
  render() {
    let { offset, inView } = this.state;
    return (
      <div
        ref="target"
        className={['fluid', inView ? 'fluid__in-view' : 'fluid__out-view'].join(' ')}
        style={{
          transform: 'translate(' + offset.x + '%, ' + offset.y + '%)'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
