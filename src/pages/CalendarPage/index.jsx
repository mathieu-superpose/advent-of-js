import { useEffect, useState } from "react";

import previous from "./src/img/previous.svg";
import next from "./src/img/next.svg";

import "./CalendarPage.scss";

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

const getDateToString = (date) => date.toLocaleString().match(/^.*\d{4}/)[0];

const getStartDay = (date) => {
  let startDay = date;
  while (startDay.getDay()) {
    startDay.setDate(startDay.getDate() - 1);
  }
  return startDay;
};

const getWeekDays = (date) => {
  const today = new Date();
  let day = getStartDay(new Date(date.getTime()));

  const days = [];
  for (let i = 0; i < 5 * 7; i++) {
    const dayObj = {
      date: day.getMonth() === date.getMonth() ? "" + day.getDate() : "",
      isToday: getDateToString(day) === getDateToString(today),
    };
    days.push(dayObj);
    day.setDate(day.getDate() + 1);
  }
  return days;
};

const CalendarPage = () => {
  const [today] = useState(new Date());
  const [currentPeriod, setCurrentPeriod] = useState(getCurrentPeriod());
  const [days, setDays] = useState(getWeekDays(new Date()))

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

  useEffect(() => {
    setDays(getWeekDays(currentPeriod))
  }, [currentPeriod])

  return (
    <div className="CalendarPage">
      <div className="CalendarPage__card">
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
          <ul className="all-days">
            {days.map((day, i) => <li key={i} className={day.isToday ? "is-today" : ""}>{day.date}</li>)}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default CalendarPage;
