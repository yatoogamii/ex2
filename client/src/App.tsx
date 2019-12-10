import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component<any, any> {

  render() {
    return (
      <Router>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
      </Router>
    )
  }

}
