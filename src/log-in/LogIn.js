import React from 'react';

import LogInForm from './LogInForm';
import SignUpBlock from './SignUpBlock';
import AppDownloadCTA from './AppDownloadCTA';
import PhoneSlideshow from './PhoneSlideshow';
import PhoneImage from '../assets/PhoneImage';

import * as styles from './LogIn.style';

function LogIn() {
  return (
    <div className={styles.container}>
      <div className={styles.phoneAndSlideshowContainer}>
        <PhoneImage className={styles.phone} />
        <PhoneSlideshow />
      </div>
      <div>
        <LogInForm />
        <SignUpBlock />
        <AppDownloadCTA />
      </div>
    </div>

  );
}

export default LogIn;
