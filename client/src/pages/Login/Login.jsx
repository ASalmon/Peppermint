import React from 'react';
import './style.css';
import LoginHeader from '../../components/LoginHeader';
import LoginFooter from '../../components/LoginFooter';
import LoginController from '../../components/LoginController';

function Login(props) {
  return (
    <div id="background">
      <div className="right">
        <div className="centered">
          <LoginHeader />
          <LoginController />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}

export default Login;
