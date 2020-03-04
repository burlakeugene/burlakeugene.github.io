import React, { Component } from 'react'
import Page from 'components/Page';
import TS from './ts';
export default class Projects extends Component {
  render() {
    return (
      <Page title="Projects" back={true}>
        <TS framework={'32'} compiler={'31'} />
      </Page>
    )
  }
}
