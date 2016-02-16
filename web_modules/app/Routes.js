import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import App from "./App"
import Home from 'PageHome'
import Discover from 'PageDiscover'

export default class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        	<Route path="PageHome" component={Home}/>
        	<Route path="PageDiscover" component={Discover}/>


        </Route>
      </Router>
  )}
}
  
