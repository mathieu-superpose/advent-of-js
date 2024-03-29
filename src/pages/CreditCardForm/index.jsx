import { useEffect, useRef, useState } from "react";

import "./CreditCardForm.scss";

const currentYear = new Date().getFullYear();

const formatCardNumber = (cardNum, symbol = " ") =>
  cardNum.toString().match(/\d{4}/g).join(symbol);

const capittalizeWords = (phrase) =>
  phrase
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

const CardData = ({
  setCardSide,
  setCardNumber,
  setCardHolder,
  setExpirationMonth,
  setExpirationYear,
  setCardType,
  setCcv,
}) => {
  const cardNumberRef = useRef();
  const cardHolderRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const ccvRef = useRef();

  const handleBlurCardNumber = () => {
    const providedCardNumber = cardNumberRef.current.value;
    const filteredCardNumber = providedCardNumber.replace(/[^0-9]/g, "");

    // error: wrong card length
    if (filteredCardNumber.length !== 16) {
      cardNumberRef.current.style.border = "2px solid #7d193e";
      return;
    }

    // error: wrong first numbers
    if (/$[127890]./.test(filteredCardNumber)) {
      cardNumberRef.current.style.border = "2px solid #7d193e";
      return;
    }

    // reset default style
    cardNumberRef.current.style.border = "2px solid #e0e0e0";

    // card type
    if (["34", "37"].includes(filteredCardNumber.slice(0, 2))) {
      setCardType("american");
    }
    if (filteredCardNumber[0] === "4") setCardType("visa");
    if (filteredCardNumber[0] === "5") setCardType("mastercard");
    if (filteredCardNumber[0] === "6") setCardType("discover");

    // format input value
    cardNumberRef.current.value = formatCardNumber(filteredCardNumber, "  ");

    // update card number
    setCardNumber(filteredCardNumber);
  };

  const handleBlurCardHolder = () => {
    const holderProvidedName = cardHolderRef.current.value;

    // error: empty name
    if (holderProvidedName === "") {
      cardHolderRef.current.style.border = "2px solid #7d193e";
      return;
    }

    // reset default style
    cardHolderRef.current.style.border = "2px solid #e0e0e0";

    // update values
    const holderNameFormated = holderProvidedName.toUpperCase();
    cardHolderRef.current.value = holderNameFormated;
    setCardHolder(holderNameFormated);
  };

  const handleBlurCcv = () => {
    const providedCcv = ccvRef.current.value;

    // error: wrong ccv
    if (providedCcv.length !== 3 || /[^0-9]/.test(providedCcv)) {
      ccvRef.current.style.border = "2px solid #7d193e";
      return;
    }

    // reset default style
    ccvRef.current.style.border = "2px solid #e0e0e0";

    // update value
    setCcv(providedCcv);
  };

  const handleBlurMonth = () => {
    setExpirationMonth(monthRef.current.value);
  };

  const handleBlurYear = () => {
    setExpirationYear(yearRef.current.value);
  };

  return (
    <div className="CardData">
      <form action="">
        <div className="row">
          <div className="field">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              name="card-number"
              ref={cardNumberRef}
              onBlur={handleBlurCardNumber}
              onFocus={() => setCardSide(true)}
            />
          </div>

          <div className="field">
            <label htmlFor="card-holder">Card Holder</label>
            <input
              type="text"
              name="card-holder"
              maxLength={28}
              ref={cardHolderRef}
              onBlur={handleBlurCardHolder}
              onFocus={() => setCardSide(true)}
            />
          </div>
        </div>

        <div className="row">
          <div className="field option__wrapper">
            <label>Expiration Date</label>
            <div className="field__option">
              <select
                name="expiration-date-month"
                ref={monthRef}
                onBlur={handleBlurMonth}
                onFocus={() => setCardSide(true)}
              >
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

              <select
                name="expiration-date-year"
                ref={yearRef}
                onBlur={handleBlurYear}
                onFocus={() => setCardSide(true)}
              >
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
            <input
              type="text"
              inputMode="numeric"
              name="cvv"
              maxLength={3}
              ref={ccvRef}
              onBlur={handleBlurCcv}
              onFocus={() => setCardSide(false)}
            />
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
  const signatureRef = useRef();

  useEffect(() => {
    if (cardHolder.length > 20) {
      signatureRef.current.style.fontSize = "16px";
    } else if (cardHolder.length > 10) {
      signatureRef.current.style.fontSize = "24px";
    } else {
      signatureRef.current.style.fontSize = "32px";
    }
  }, [cardHolder]);

  return (
    <div className={`CardImage ${cardSide ? "" : "flip"}`}>
      <div className="credit-card__inner">
        <div className={`${cardType} credit-card--front`}>
          <div className="card-number">
            <div className="card-number__shadow shadow">
              {formatCardNumber(cardNumber)}
            </div>
            <div className="card-number__emboss emboss">
              {formatCardNumber(cardNumber)}
            </div>
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
        <div className={`${cardType} credit-card--back`}>
          <div className="signature" ref={signatureRef}>
            {capittalizeWords(cardHolder)}
          </div>
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
        <CardData
          setCardSide={setCardSide}
          setCardNumber={setCardNumber}
          setCardHolder={setCardHolder}
          setExpirationMonth={setExpirationMonth}
          setExpirationYear={setExpirationYear}
          setCardType={setCardType}
          setCcv={setCcv}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;
