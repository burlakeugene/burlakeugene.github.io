import React, { Component } from 'react';
import {Props, State, Projects, Project} from 'types/Projects';

export default class Item extends Component<Project> {
  constructor(props: Project){
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}
