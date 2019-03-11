import React, { Component } from 'react'
import Blob from '../Blob';
import './styles/styles.scss';

export default class Logo extends Component {
  render() {
    return (
        <div className="logo">
            <Blob styles={{
                width: '100%',
                height: '100%',
                backgroundColor: '#0088cc',
                boxShadow: 'inset 0 10px 20px 0 #29cccc'
            }} />
        </div>
    )
  }
}
