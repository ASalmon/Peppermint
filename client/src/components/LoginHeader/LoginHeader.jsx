import React from 'react';
import DirectionsBike from '@material-ui/icons/DirectionsBike';
// import './style.css';

const styleForHeader = {
  marginTop: 50,
  marginBottom: 50,
};

const styleForBikeIcon = {
  fontSize: 120,
};

const styleForHeading = {
  fontFamily: 'Fahkwang, sansSerif',
  /* fontFamily: 'Gentium Basic, serif', */
  /* fontFamily: 'Josefin Sans, sansSerif', */
  /* fontFamily: 'Nunito Sans, sansSerif', */
  /* fontFamily: 'Overpass, sansSerif', */
  /* fontFamily: 'Prosto One, cursive', */
  /* fontFamily: 'Proza Libre, sansSerif', */
  /* fontFamily: 'Reem Kufi, sansSerif', */
};

const styleForSubtext = {
  fontStyle: 'italic',
  fontFamily: 'arial, sansSerif',
  fontSize: 18,
};


const LoginHeader = () => {
  return (
    <React.Fragment>
      <div style={styleForHeader}>
        <DirectionsBike style={styleForBikeIcon} />
        <h1 style={styleForHeading}>Handlebars Express</h1>
        <p style={styleForSubtext}>sales dashboard</p>
      </div>
    </React.Fragment>
  );
};

export default LoginHeader;
