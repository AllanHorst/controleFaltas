import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link, Route, browserHistory, IndexRoute } from 'react-router';
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <ul>
            <li><Link to ="/home">Home</Link></li>
            <li><Link to ="/home">Lorem</Link></li>
            <li><Link to ="/home">Ipsum</Link></li>
          </ul>
        </div>

        <div className="container">
          {this.props.children}
        </div>

      </div>
    );
  }
}
