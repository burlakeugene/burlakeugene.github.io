import React, { Component } from 'react';
import { getProjects } from 'actions/Projects';
import {Props, State, Projects, Project} from 'types/Projects';
import Item from './item';

export default class List extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: props.items || []
    };
  }
  componentDidMount() {
    getProjects().then((resp) => {
      this.setState({
        items: resp.items
      });
    });
  }
  render() {
    let { items } = this.state;
    return (
      <div className="projects">
        {items.map((item, index) => {
          return <Item key={index} {...item} />
        })}
      </div>
    );
  }
}
