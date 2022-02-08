import React from 'react';

import * as styles from './LogIn.style';

function SignUpBlock() {
  return (
    <div className={styles.signUpBlock}>
      <p>
        Don't have an account?{'  '}
        <a href="/accounts/emailsignup/">Sign up</a>
      </p>
    </div>
  );
}

export default SignUpBlock;
