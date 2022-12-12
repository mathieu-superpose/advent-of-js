import { useEffect, useState } from "react";

import WeatherIcon from "./WeatherIcon";

import precipitation from "./src/img/precipitation.svg";
import low from "./src/img/low.svg";

import "./Day.scss";

const weatherStyle = {
  clear: {
    "--background": "#E6DF95",
    "--temperature": "#4DB0D3",
    "--content": "#247490",
  },
  cloudy: {
    "--background": "#4DB0D3",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  mcloudy: {
    "--background": "#4DB0D3",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  pcloudy: {
    "--background": "#4DB0D3",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  lightrain: {
    "--background": "#2B8BAD",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  oshower: {
    "--background": "#4DB0D3",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  rain: {
    "--background": "#2B8BAD",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  tsrain: {
    "--background": "#0E2E3A",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  windy: {
    "--background": "#4DB0D3",
    "--temperature": "#E6DF95",
    "--content": "#D3EBF4",
  },
  snow: {
    "--background": "#BCE1EF",
    "--temperature": "#0E2E3A",
    "--content": "#247490",
  },
  default: {
    "--background": "#E6DF95",
    "--temperature": "#4DB0D3",
    "--content": "#247490",
  },
};

const getDay = (date) => {
  const WEEK_DAYS = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };
  return WEEK_DAYS[date.getDay()];
};

const getDate = (date) => {
  const dateStr = date.toString().replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
  return new Date(dateStr);
};

const Day = ({ day, loaded }) => {
  const date = getDate(day.date);
  const dayOfWeek = getDay(date);

  if (loaded)
    return (
      <div className="Day" style={weatherStyle[day?.weather || "default"]}>
        <div className="Day__day-of-week">{dayOfWeek}</div>
        <div className="Day__date">{date.getDate()}</div>

        <WeatherIcon type={day.weather} />

        <div className="Day__temperature">
          {day.temp2m.max}
          <span className="Day__temperature__degrees">&deg;</span>
        </div>

        <div className="Day__content">
          <div className="Day__content__precipitation">
            <img
              className="Day__content__precipitation__icon"
              src={precipitation}
              alt="umbrella icon"
            />
            {Math.floor(Math.random() * 100)}%
          </div>
          <div className="Day__content__low">
            <img
              className="Day__content__low__icon"
              src={low}
              alt="thermometer icon"
            />
            {day.temp2m.min}&deg;
          </div>
        </div>
      </div>
    );

  return (
    <div className="Day" style={weatherStyle["default"]}>
      <div className="Day__day-of-week">{dayOfWeek}</div>
      <div className="Day__date">{date.getDate()}</div>

      <WeatherIcon type={"default"} />
    </div>
  );
};

export default Day;
