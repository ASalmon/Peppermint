import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/authActions';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import store from './store';

if (localStorage.token) {
  const decodedToken = jwtDecode(localStorage.token);
  store.dispatch(setCurrentUser(decodedToken));
  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logoutUser());
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
