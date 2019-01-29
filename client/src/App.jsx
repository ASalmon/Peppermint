import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => (
  <React.Fragment>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

export default App;
