import "./Selectable.scss";

const TEXT_NUMBER = {
  5: "five",
  10: "ten",
  15: "fifteen",
  20: "twenty",
};

const Selectable = ({ value, tipPercentage, setTipPercentage }) => {
  return (
    <div
      className={`Selectable${+value === +tipPercentage ? "--selected" : ""}`}
    >
      <input
        type="radio"
        name="tip"
        value={`${value}%`}
        id={`${TEXT_NUMBER[value]}-percent`}
        checked={+value === +tipPercentage}
        onChange={() => setTipPercentage(value)}
      />
      <label htmlFor={`${TEXT_NUMBER[value]}-percent`}>{value}%</label>
    </div>
  );
};

export default Selectable;
