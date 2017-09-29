import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Link, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/home';
import MatterRegister from './pages/matter-register'

ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component={ App}>
        <IndexRoute component={ Home } />
        <Route path = "home" component={ Home } />
        <Route path = "matter-register" component={ MatterRegister } />
     </Route>
  </Router>
), document.getElementById('root'))

