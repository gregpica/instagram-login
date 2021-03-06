import React from 'react';

import * as styles from './LogIn.style';

function LogInFormDivider() {
  return (
    <div className={styles.divider}>
      <div className={styles.dividerLine}></div>
      <p>OR</p>
      <div className={styles.dividerLine}></div>
    </div>
  );
}

export default LogInFormDivider;
