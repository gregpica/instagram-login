import React from 'react';
import googlePlayImage from './google-play.png';

function GooglePlayCTA({ className }) {
  return (
    <div className={className}>
      <img src={googlePlayImage} alt='google-play' />
    </div>
  );
}

export default GooglePlayCTA;
