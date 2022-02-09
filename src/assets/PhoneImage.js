import React from 'react';
import phoneImage from './phone.png';

function PhoneImage({ className }) {
  return (
    <div className={className}>
      <img src={phoneImage} alt='phone' />
    </div>
  );
}

export default PhoneImage;
