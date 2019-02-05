import React from 'react';
import './style.css';
import LoginLeft from '../../components/LoginLeft';
import LoginHeader from '../../components/LoginHeader';
import LoginController from '../../components/LoginController';
import LoginFooter from '../../components/LoginFooter';


function Login() {
  return (
    <div className="wrapper">
      <div id="left-side">
        <LoginLeft />
      </div>
      <div id="right-side">
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
