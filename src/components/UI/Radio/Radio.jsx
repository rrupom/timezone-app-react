const Radio = ({ name, value, checked, handleRadioChange }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        value={value}
        id={value}
        checked={checked}
        onChange={handleRadioChange}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

export default Radio;
