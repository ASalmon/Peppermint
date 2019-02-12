import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import store from './store';

if (localStorage.token) {

  // Decode token and get user info and exp
  const decodedToken = jwtDecode(localStorage.token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decodedToken));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    // Logout user
    // store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/';
  }
}

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  </Provider>
);

export default App;
