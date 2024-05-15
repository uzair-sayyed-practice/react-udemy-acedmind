import React, { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation";
import useInput from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    inputBlurHandler: passwordBlurHandler,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          id='email'
          label='Email'
          type='email'
          name='email'
          onChange={handleEmailChange}
          value={emailValue}
          onBlur={emailBlurHandler}
          error={emailHasError && "Please enter a valid email address."}
        />

        <Input
          id='password'
          label='Password'
          type='password'
          name='password'
          onChange={handlePasswordChange}
          value={passwordValue}
          onBlur={passwordBlurHandler}
          error={passwordHasError && "Please enter a valid Password."}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
