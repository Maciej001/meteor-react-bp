import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { App } from "./App.jsx";
import { Home } from "/imports/api/home/Home";
import Header from "/imports/api/headers/Header";

export class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute
            components={{
              header: Header,
              content: Home
            }}
          />
        </Route>
      </Router>
    );
  }
}
