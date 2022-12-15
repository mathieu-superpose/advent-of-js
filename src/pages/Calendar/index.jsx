import { useEffect, useState } from "react";

import previous from "./src/img/previous.svg";
import next from "./src/img/next.svg";

import "./Calendar.scss";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const getCurrentPeriod = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return new Date(`${year}-${month}-01`);
};

const Calendar = () => {
  const [today] = useState(new Date());
  const [currentPeriod, setCurrentPeriod] = useState(getCurrentPeriod());

  const handleNextMonth = () => {
    let month = currentPeriod.getMonth() + 1;
    let year = currentPeriod.getFullYear();

    if (month === 12) {
      year++;
      month = 0;
    }

    setCurrentPeriod(new Date(`${year}-${month + 1}-01`));
  };

  const handlePreviousMonth = () => {
    let month = currentPeriod.getMonth() - 1;
    let year = currentPeriod.getFullYear();

    if (month < 0) {
      year--;
      month = 11;
    }

    setCurrentPeriod(new Date(`${year}-${month + 1}-01`));
  };

  return (
    <div className="Calendar">
      <div className="Calendar__card">
        <header>
          <button onClick={handlePreviousMonth}>
            <img src={previous} alt="previous icon" />
          </button>
          <h1>{MONTHS[currentPeriod.getMonth()]}</h1>
          <button onClick={handleNextMonth}>
            <img src={next} alt="next icon" />
          </button>
        </header>

        <main>
          <ul className="week-day-list">
            {WEEK_DAYS.map((weekDay, id) => (
              <li key={id}>{weekDay}</li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Calendar;
