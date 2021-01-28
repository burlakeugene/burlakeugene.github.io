import React, { Component } from 'react';
import Blob from 'components/Blob';
import Link from 'components/Link';
import './styles/styles.scss';
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: {
        title: 'Get in touch',
        items: [
          {
            label: 'Email',
            text: 'burlakeugene@gmail.com',
            href: 'mailto:burlakeugene@gmail.com',
          },
          {
            label: 'Telegram',
            text: '@burlakeugene',
            href: 'https://t.me/burlakeugene',
          },
        ],
      },
    };
    this.structure = {};
  }
  render() {
    let { structure } = this.state;
    return (
      <div className="app-header-content">
        <div className="app-header-content-scroller">
          <div className="contacts">
            <div className="contacts-title">{structure.title}</div>
            {structure.items.map((item) => {
              return (
                <div className="contacts-item">
                  <div className="contacts-item-label">{item.label}</div>
                  <div className="contacts-item-link">
                    <Link
                      to={item.href}
                      text={item.text}
                      external
                      target="_blank"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
