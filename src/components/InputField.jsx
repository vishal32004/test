const InputField = ({ type, name, placeholder }) => {
  return (
    <div className="form-group">
      <i className={`fa-solid fa-${name}`}></i>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
