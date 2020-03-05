import React, { Component } from 'react';
import { getProjects } from 'actions/Projects';
import {Props, State, Projects, Project} from 'interfaces/Projects';
import Item from './item';

export default class List extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: props.items || []
    };
  }
  componentDidMount() {
    getProjects().then((resp: Projects) => {
      this.setState({
        items: resp.items
      });
    });
  }
  render() {
    let { items } = this.state;
    return (
      <div className="projects">
        {/* <Item name={'132'} systemName={'321'} /> */}
        {items.map((item) => {
          return <Item {...item} />
        })}
      </div>
    );
  }
}
