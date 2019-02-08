import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginNew from './pages/LoginNew';
// import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginNew} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  </Provider>
);

export default App;
