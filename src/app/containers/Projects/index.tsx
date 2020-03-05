import React, { Component } from 'react'
import Page from 'components/Page';
import Projects from 'components/Projects';
export default class ProjectsPage extends Component {
  render() {
    return (
      <Page title="Projects" back={true}>
        <Projects.List />
      </Page>
    )
  }
}
