import "./EditableInput.scss";

const EditableInput = ({ description, value, setValue }) => {
  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="EditableInput">
      <div className="EditableInput__field">
        <input
          type="text"
          id="bill-amount"
          name="bill-amount"
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <div className="EditableInput__label">{description}</div>
    </div>
  );
};

export default EditableInput;
