import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  </Provider>
);

export default App;
