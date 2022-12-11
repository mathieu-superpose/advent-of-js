import { useState } from "react";

import EditableInput from "./components/EditableInput";
import PriceDisplayed from "./components/PriceDisplayed";
import Selectable from "./components/Selectable";

// import bill from './src/img/bill.svg'

import "./TipCalculator.scss";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("102.02");
  const [peopleCount, setPeopleCount] = useState("3");
  const [tipPercentage, setTipPercentage] = useState("15");

  const formatPrice = (price) => {
    const roundPrice = `${Math.ceil(+price * 100)}`;
    return roundPrice.slice(0, -2) + "." + roundPrice.slice(-2);
  };

  const getTipAmount = () => formatPrice((+billAmount * tipPercentage) / 100);

  const getTotalPerPerson = () => {
    const billAmountConverted = Number(billAmount);
    const tipPercentageConverted = Number(tipPercentage);
    const peopleCountConverted = Number(peopleCount) || 1;

    return formatPrice(
      (billAmountConverted * (100 + tipPercentageConverted)) /
        (100 * peopleCountConverted)
    );
  };

  return (
    <div className="TipCalculator">
      <div className="TipCalculator__card">
        <PriceDisplayed description="Tip Amount" price={getTipAmount()} />
        <PriceDisplayed
          description="Total Per Person"
          price={getTotalPerPerson()}
        />

        <div className="TipCalculator__card__editableContent">
          <EditableInput
            description={"Bill Amount"}
            value={billAmount}
            setValue={setBillAmount}
          />
          <EditableInput
            description={"Number of People"}
            value={peopleCount}
            setValue={setPeopleCount}
          />
        </div>

        <ul className="TipCalculator__card__tipPercentList">
          <li>
            <Selectable
              key={"5"}
              value={"5"}
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
            />
          </li>
          <li>
            <Selectable
              key={"10"}
              value={"10"}
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
            />
          </li>
          <li>
            <Selectable
              key={"15"}
              value={"15"}
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
            />
          </li>
          <li>
            <Selectable
              key={"20"}
              value={"20"}
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TipCalculator;
