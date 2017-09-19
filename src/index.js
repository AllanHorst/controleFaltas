import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Link, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/home';


ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
     </Route>
  </Router>
), document.getElementById('root'))

