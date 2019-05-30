import React, { Component } from 'react'
import { connect } from "react-redux";
import Blob from '../Blob';
import './styles/styles.scss';
class Skills extends Component {
	constructor(props){
		super();
		this.state = {
			// skills: props.skills.sort(this.arrayRandom)
			skills: props.skills
		}
	}
	arrayRandom(a, b) {
		return Math.random() - 0.5;
	}
	componentDidMount(){
	}
  render() {
		let {skills} = this.state;
		return (
			<div className="skills">
				<div className="skills-title">
					<h2><span className="up">Tec</span><span className="down">h</span> <span className="up">stac</span><span className="down">k</span></h2>
				</div>
				{skills && skills.map((e, i) => {
					let image = false;
					try{
						image = require('./styles/images/'+ e.systemName +'.svg');
					}
					catch{}
					if(!image) return null;
					return (
						<div
							key={i}
							className="skill"
							style={{
								backgroundImage: 'url('+ image +')',
								backgroundColor: e.color ? e.color : '#000',
								position: 'relative'
							}}
						/>
					)
				})}
			</div>
		)
  }
}

export default connect(state => {
	return {
	  skills: state.skillsReducer
	};
})(Skills);