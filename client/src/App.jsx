import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import './App.css';

const App = () => (
  <React.Fragment>
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

export default App;
