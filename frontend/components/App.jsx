import React from 'react';
import SessionLinks from './session/session_links';
import SessionForm from './session/session_form_container';
import HomePage from './homepage.jsx';
import { AuthRoute } from '../util/route_util.jsx';
import {
  Route,
  Link,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
      <h1>æterNote</h1>
      <Route exact path='/' component={ HomePage } />
      <AuthRoute path='/login' component={ SessionForm } />
      <AuthRoute path='/signup' component={ SessionForm } />
    </div>
  );


export default App;
