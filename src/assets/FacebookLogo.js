import React from 'react';
import facebookLogo from './facebook-logo.png';

function FacebookLogo({ className }) {
  return (
    <div className={className}>
      <img src={facebookLogo} alt='facebook-logo' />
    </div>
  );
}

export default FacebookLogo;
