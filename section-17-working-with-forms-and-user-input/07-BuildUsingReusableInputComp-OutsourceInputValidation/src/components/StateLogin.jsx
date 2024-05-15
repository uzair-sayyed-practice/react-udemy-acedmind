import React, { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsValid = didEdit.email && !isEmail(enteredValues.email);

  const passwordIsValid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  const handleInputChange = (identifier, event) => {
    setEnteredValues((prevState) => {
      return { ...prevState, [identifier]: event.target.value };
    });
    setDidEdit((prevEdit) => {
      return { ...prevEdit, [identifier]: false };
    });
  };

  const inputBlurHandler = (identifier) => {
    setDidEdit((prevEdit) => {
      return { ...prevEdit, [identifier]: true };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValues);
    setEnteredValues({
      email: "",
      password: "",
    });
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
          onChange={(event) => handleInputChange("email", event)}
          value={enteredValues.email}
          onBlur={() => inputBlurHandler("email")}
          error={emailIsValid && "Please enter a valid email address."}
        />

        <Input
          id='password'
          label='Password'
          type='password'
          name='password'
          onChange={(event) => handleInputChange("password", event)}
          value={enteredValues.password}
          onBlur={() => inputBlurHandler("password")}
          error={passwordIsValid && "Please enter a valid Password."}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
