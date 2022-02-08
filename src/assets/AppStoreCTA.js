import React from 'react';
import appStoreImage from './app-store.png';

function AppStoreCTA({ className }) {
  return (
    <div className={className}>
      <img src={appStoreImage} alt='app-store' />
    </div>
  );
}

export default AppStoreCTA;
