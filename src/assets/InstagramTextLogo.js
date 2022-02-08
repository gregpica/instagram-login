import React from 'react';
import textLogo from './instagram-text-logo.png';

function InstagramTextLogo({ className }) {
  return (
    <div className={className}>
      <img src={textLogo} alt='instagram-text-logo' />
    </div>
  );
}

export default InstagramTextLogo;
