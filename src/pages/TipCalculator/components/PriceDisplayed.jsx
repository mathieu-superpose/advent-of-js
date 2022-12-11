import "./PriceDisplayed.scss";

const PriceDisplayed = ({ description, price }) => {
  return (
    <div className="PriceDisplayed">
      <div className="PriceDisplayed__label">{description}</div>
      <div className="PriceDisplayed__dollars">
        <sup>$</sup>
        <span id={description.toLowerCase()}>{price}</span>
      </div>
    </div>
  );
};

export default PriceDisplayed;
