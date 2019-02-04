import React from 'react';
import './style.css';
import Amsterdam from '../../amsterdam.jpg';

// const gifStyle = {
//   width: '100%',
//   height: 0,
//   paddingBottom: '75%',
//   position: 'relative',
// };

// const frameStyle = {
//   position: 'absolute',

// };

const imageStyle = {
  width: '100%',
  topMargin: 0,
};

const LoginLeft = () => {
  return (
    <React.Fragment>
      <h1 className="left-text">Where will YOU ride today?</h1>
      {/* <div style={gifStyle}>
        <iframe title="Ride" src="https://giphy.com/embed/xTiTnrdPPXGQE0TOow" width="100%" height="100%" style={frameStyle} frameBorder="0" className="giphy-embed" allowFullScreen />
      </div> */}
      <img src={Amsterdam} alt="ride" style={imageStyle} />
    </React.Fragment>
  );
};

export default LoginLeft;
