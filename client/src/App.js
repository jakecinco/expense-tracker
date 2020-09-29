import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './layout/Home';
import Login from './layout/Login';
import Signup from './layout/Signup';

import { GlobalProvider } from './context/GlobalState';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Router>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
