import React from 'react';

import GooglePlayCTA from '../assets/GooglePlayCTA';
import AppStoreCTA from '../assets/AppStoreCTA';

import * as styles from './LogIn.style';

function AppDownloadCTA() {
  return (
    <div className={styles.appDownloadCTAContainer}>
      <p>Get the app.</p>
      <div>
        <AppStoreCTA className={styles.appDownloadImage} />
        <GooglePlayCTA className={styles.appDownloadImage} />
      </div>
    </div>
  );
}

export default AppDownloadCTA;
