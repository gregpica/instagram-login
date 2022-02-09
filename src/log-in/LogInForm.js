import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { cx } from '@emotion/css';

import TextInput from '../form/TextInput';
import PasswordInput from '../form/PasswordInput';
import SubmitInput from '../form/SubmitInput';
import InstagramTextLogo from '../assets/InstagramTextLogo';
import LogInFormDivider from './LogInFormDivider';
import LogInWithFacebook from './LogInWithFacebook';

import * as styles from './LogIn.style';

const LogInForm = () => {
  const [accountIdentifier, setAccountIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogInMessage, setFailedLogInMessage] = useState('');

  const navigate = useNavigate();

  const handleAccountIdentifierChange = e => setAccountIdentifier(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const isSubmitAllowed = password.length > 6 && accountIdentifier.length > 6;

  const handleLogInResult = result => {
    if (result.message) {
      setFailedLogInMessage(result.message);
    } else {
      navigate('/success');
    }
  }

  const logInWithCredentials = () => {
    fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accountIdentifier,
        password
      }),
    })
      .then(res => res.json())
      .then(result => handleLogInResult(result))      
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    if (isSubmitAllowed) {
      logInWithCredentials();
    }

    return null;
  };

  return (
    <div className={styles.formContainer}>
      <InstagramTextLogo className={styles.instagramLogo} />
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
      <LogInFormDivider />
      <LogInWithFacebook />
      {
        failedLogInMessage && 
        <p className={styles.failMessage}>
          {failedLogInMessage}
        </p>
      }
      <div className={styles.forgotPasswordCta}>
        <a href='/accounts/password/reset'>
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default LogInForm;
