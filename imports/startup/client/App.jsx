import React, { Component } from "react";
import './App.css';

export class App extends Component {
  render() {
    const { header, content } = this.props;
    return (
        <div className="App">
          {header}
          {content}
        </div>
    );
  }
}
