import React from 'react';

import FacebookLogo from '../assets/FacebookLogo';

import * as styles from './LogIn.style';

const DUMMY_FACEBOOK_LOG_IN_LINK = 'https://www.facebook.com/';

function LogInWithFacebook() {
  return (
    <a className={styles.facebookLogin} href={DUMMY_FACEBOOK_LOG_IN_LINK}>
      <FacebookLogo className={styles.facebookLogo} />
      <span>Log in with Facebook</span>
    </a>
  );
}

export default LogInWithFacebook;
