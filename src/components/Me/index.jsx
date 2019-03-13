import React, { Component } from 'react'
import Face from '../Face';
import './styles/styles.scss';
export default class Me extends Component {
	render() {
		return (
			<div className="me">
				<h2 className="me-firstname">Eugene</h2>
				<h1 className="me-lastname">Burlak</h1>
				<Face className="me-photo" />
			</div>
		)
	}
}