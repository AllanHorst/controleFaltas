import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link, Route, browserHistory, IndexRoute } from 'react-router';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Controle de Faltas</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li><Link className="nav-link active" to ="/home">Home</Link></li>
              <li><Link className="nav-link active" to ="/matter-register">Cadastro de Matérias</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>

      </div>
    );
  }
}
