import React, { Component } from 'react'
import Blob from '../Blob';
export default class Face extends Component {
	render() {
		let image = require('./styles/images/me.png');
		return (
			<div>
				<Blob styles={{
					width: '200px',
					height: '200px',
					backgroundImage: 'url('+ image +')'
				}}>
				</Blob>
			</div>
		)
	}
}