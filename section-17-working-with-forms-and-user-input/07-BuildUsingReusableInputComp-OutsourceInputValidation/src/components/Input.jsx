const Input = ({ id, label, error, ...props }) => {
  return (
    <div className='control no-margin'>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />

      {error && <p className='control-error '>{error}</p>}
    </div>
  );
};

export default Input;
