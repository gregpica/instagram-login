import React, { useState } from 'react';
import { cx } from '@emotion/css';

import TextInput from '../form/TextInput';
import PasswordInput from '../form/PasswordInput';
import SubmitInput from '../form/SubmitInput';
import InstagramTextLogo from '../assets/InstagramTextLogo';
import LoginFormDivider from './LogInFormDivider';

import * as styles from './LogIn.style';

const LogInForm = () => {
  const [accountIdentifier, setAccountIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleAccountIdentifierChange = e => setAccountIdentifier(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const isSubmitAllowed = password.length > 6 && accountIdentifier.length > 6;

  const handleSubmit = () => {
    if (isSubmitAllowed) {

    }

    return null;
  };

  return (
    <div>
      <InstagramTextLogo className={styles.logo} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput 
          className={styles.formTextInput}
          id="login-account-identifer"
          placeholder="Phone number, username, or email"
          onChange={handleAccountIdentifierChange} value={accountIdentifier} 
        />
        <PasswordInput 
          className={styles.formPasswordInput}
          id="login-password" 
          placeholder="Password" 
          onChange={handlePasswordChange}
          value={password} 
        />
        <SubmitInput className={cx(styles.formSubmitInput, {
          '-submit-allowed': isSubmitAllowed
        })} value="Log In" />
      </form>
      <LoginFormDivider />
    </div>
  );
}

export default LogInForm;
