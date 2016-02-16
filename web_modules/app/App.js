import React, { Component, PropTypes } from 'react';
import HeaderNav from "HeaderNav"
// import {link, Index}

export default class App extends Component {


static propTypes = {
	children: PropTypes.node,
};
static defaultrops = {
	children: {},
};

  render() {
    return (
      <div>
        <HeaderNav />
        {this.props.children}
      </div>
    )
  }
}
