import React, { Component } from 'react';
import {goBack} from 'actions/App';
import './styles/styles.scss';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      back: props.back
    };
  }
  render() {
    let { title, back } = this.state;
    return (
      <div className="page">
        <div className="page-inner">
          {title && (
            <div
              className={[
                'page-title',
                back ? 'page-title__with-back' : ''
              ].join(' ')}
            >
              {back && <button className="page-title-back" onClick={(e) => {
                e.preventDefault();
                goBack();
              }}></button>}
              <h1>{title}</h1>
            </div>
          )}
          <div className="page-scroller">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
