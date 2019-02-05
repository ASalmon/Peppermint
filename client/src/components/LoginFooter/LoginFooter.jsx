import React from 'react';
import Peppermint from '../../peppermint.jpg';

const styleForFooterArea = {
  marginTop: 20,
  marginBottom: 20,
};

const styleForLogo = {
  marginRight: 5,
  verticalAlign: 'middle',
};

const styleForFooterText = {
  display: 'inline-block',
  color: 'black',
  fontFamily: 'arial, sansSerif',
  fontSize: 12,
};


const LoginFooter = () => {
  return (
    <React.Fragment>
      <div style={styleForFooterArea}>
        <img style={styleForLogo} src={Peppermint} alt="logo" />
        <p style={styleForFooterText}>Powered by Peppermint © 2019</p>
      </div>
    </React.Fragment>
  );
};

export default LoginFooter;
