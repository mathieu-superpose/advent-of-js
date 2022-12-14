import { useEffect, useState, useRef } from "react";
import useLastKeyPressed from "../../hooks/useLastKeyPressed";

import "./PasswordVerifier.scss";

const PasswordVerifier = () => {
  const input0 = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const button = useRef();
  const lastKeyPressed = useLastKeyPressed();
  const [currentFocusName, setCurrentFocusName] = useState("");

  const handleInputValueChange = (e) => {
    const filledChar = e.target.value;
    if (filledChar === "") {
      e.target.style.background = "#f0f3fa";
    }
    if (/[^\d]/.test(filledChar)) {
      e.target.style.background = "#FAA0A0";
    }
    if (/\d/.test(filledChar)) focusNext(e.target.name);
  };

  const focusNext = (currentFocusName) => {
    if (currentFocusName === "verification_0") {
      input1.current.focus();
    }
    if (currentFocusName === "verification_1") {
      input2.current.focus();
    }
    if (currentFocusName === "verification_2") {
      input3.current.focus();
    }
    if (currentFocusName === "verification_3") {
      button.current.focus();
    }
  };

  useEffect(() => {
    console.log(currentFocusName);

    if (
      lastKeyPressed === "Backspace" &&
      ["", "verification"].includes(currentFocusName)
    ) {
      input3.current.value = "";
      setCurrentFocusName("verification_3")
      input3.current.focus();
    }
    if (
      lastKeyPressed === "Backspace" &&
      currentFocusName === "verification_3" &&
      input3.current.value === ""
    ) {
      input2.current.value = "";
      setCurrentFocusName("verification_2")
      input2.current.focus();
    }
    if (
      lastKeyPressed === "Backspace" &&
      currentFocusName === "verification_2" &&
      input2.current.value === ""
    ) {
      input1.current.value = "";
      setCurrentFocusName("verification_1")
      input1.current.focus();
    }
    if (
      lastKeyPressed === "Backspace" &&
      currentFocusName === "verification_1" &&
      input1.current.value === ""
    ) {
      input0.current.value = "";
      setCurrentFocusName("verification_0")
      input0.current.focus();
    }

    if (/\d/.test(lastKeyPressed) && currentFocusName === "") {
      input0.current.value = lastKeyPressed;
      input1.current.focus();
    }
  }, [lastKeyPressed]);

  return (
    <div className="PasswordVerifier" onClick={() => setCurrentFocusName("")}>
      <div className="PasswordVerifier__card">
        <h1 className="PasswordVerifier__card__title">Authorization Code</h1>
        <p className="PasswordVerifier__card__subtitle">
          Please enter the code that we sent to (***) *** - 2819.
        </p>
        <form className="PasswordVerifier__card__form">
          <div className="PasswordVerifier__card__form__fields">
            <input
              ref={input0}
              type="text"
              maxLength="1"
              name="verification_0"
              onChange={(e) => handleInputValueChange(e)}
              onFocus={() => setCurrentFocusName("verification_0")}
            />
            <input
              ref={input1}
              type="text"
              maxLength="1"
              name="verification_1"
              onChange={(e) => handleInputValueChange(e)}
              onFocus={() => setCurrentFocusName("verification_1")}
            />
            <input
              ref={input2}
              type="text"
              maxLength="1"
              name="verification_2"
              onChange={(e) => handleInputValueChange(e)}
              onFocus={() => setCurrentFocusName("verification_2")}
            />
            <input
              ref={input3}
              type="text"
              maxLength="1"
              name="verification_3"
              onChange={(e) => handleInputValueChange(e)}
              onFocus={() => setCurrentFocusName("verification_3")}
            />
          </div>
          <button
            ref={button}
            name="verification"
            onFocus={() => setCurrentFocusName("verification")}
            className="PasswordVerifier__card__form__button"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordVerifier;
