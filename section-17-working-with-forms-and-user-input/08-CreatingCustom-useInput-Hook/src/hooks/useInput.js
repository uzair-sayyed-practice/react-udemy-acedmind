import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const inputBlurHandler = () => {
    setDidEdit(true);
  };
  return {
    value: enteredValue,
    handleInputChange,
    inputBlurHandler,
    hasError: didEdit && !valueIsValid,
  };
}
