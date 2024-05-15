import React, { useState, useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmailValue = emailRef.current.value;
    const enteredPasswordValue = passwordRef.current.value;

    const emailIsValid = enteredEmailValue.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
    console.log("if check skipped because value contains @ ");
    console.log("Form submitted");
    // console.log(enteredEmailValue, enteredPasswordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' ref={emailRef} />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            ref={passwordRef}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
