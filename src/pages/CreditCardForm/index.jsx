import { useRef, useState } from "react";

import "./CreditCardForm.scss";

const currentYear = new Date().getFullYear();

const CardData = () => {
  const cardNumberRef = useRef();
  const cardHolderRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const ccvRef = useRef();

  return (
    <div className="CardData">
      <form action="">
        <div className="row">
          <div className="field">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="card-number" ref={cardNumberRef} />
          </div>

          <div className="field">
            <label htmlFor="card-holder">Card Holder</label>
            <input type="text" name="card-holder" ref={cardHolderRef} />
          </div>
        </div>

        <div className="row">
          <div className="field option__wrapper">
            <label>Expiration Date</label>
            <div className="field__option">
              <select name="expiration-date-month" ref={monthRef}>
                <option>Month</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              <select name="expiration-date-year" ref={yearRef}>
                <option>Year</option>
                <option value={currentYear}>{currentYear}</option>
                <option value={currentYear + 1}>{currentYear + 1}</option>
                <option value={currentYear + 2}>{currentYear + 2}</option>
                <option value={currentYear + 3}>{currentYear + 3}</option>
                <option value={currentYear + 4}>{currentYear + 4}</option>
                <option value={currentYear + 5}>{currentYear + 5}</option>
                <option value={currentYear + 6}>{currentYear + 6}</option>
                <option value={currentYear + 7}>{currentYear + 7}</option>
                <option value={currentYear + 8}>{currentYear + 8}</option>
                <option value={currentYear + 9}>{currentYear + 9}</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="cvv">CVV</label>
            <input type="number" name="cvv" ref={ccvRef} />
          </div>
        </div>

        <div className="row">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const CardImage = ({
  cardSide,
  cardNumber,
  cardHolder,
  expirationMonth,
  expirationYear,
  cardType,
  ccv,
}) => {
  return (
    <div className={`CardImage ${cardSide ? "flip" : ""}`}>
      <div className="credit-card__inner">
        <div className={`${cardType} credit-card--front`}>
          <div className="card-number">
            <div className="card-number__shadow shadow">{cardNumber}</div>
            <div className="card-number__emboss emboss">{cardNumber}</div>
          </div>
          <div className="card-holder">
            <div className="card-holder__shadow shadow">{cardHolder}</div>
            <div className="card-holder__emboss emboss">{cardHolder}</div>
          </div>
          <div className="expiration-date">
            <div className="expiration-date__shadow shadow">{`${expirationMonth}/${expirationYear}`}</div>
            <div className="expiration-date__emboss emboss">{`${expirationMonth}/${expirationYear}`}</div>
          </div>
        </div>
        <div className="credit-card--back">
          <div className="signature">{cardHolder}</div>
          <div className="cvv">{ccv}</div>
        </div>
      </div>
    </div>
  );
};

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
  const [cardHolder, setCardHolder] = useState("Amy Dutton");
  const [expirationMonth, setExpirationMonth] = useState("12");
  const [expirationYear, setExpirationYear] = useState("2022");
  const [ccv, setCcv] = useState("123");
  const [cardType, setCardType] = useState("discover");
  const [cardSide, setCardSide] = useState(true);

  return (
    <div className="CreditCardForm">
      <div className="wrapper">
        <CardImage
          cardSide={cardSide}
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
          cardType={cardType}
          ccv={ccv}
        />
        <CardData />
      </div>
    </div>
  );
};

export default CreditCardForm;
