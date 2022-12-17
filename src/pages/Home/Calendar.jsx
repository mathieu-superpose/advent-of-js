import { Link } from "react-router-dom";
import day01 from "./src/images/day-01.svg";
import day02 from "./src/images/day-02.svg";
import day03 from "./src/images/day-03.svg";
import day04 from "./src/images/day-04.svg";
import day05 from "./src/images/day-05.svg";
import day06 from "./src/images/day-06.svg";
import day07 from "./src/images/day-07.svg";
import day08 from "./src/images/day-08.svg";
import day09 from "./src/images/day-09.svg";
import day1011 from "./src/images/day-10-11.svg";
import day12 from "./src/images/day-12.svg";
import day1317 from "./src/images/day-13-17.svg";
import day14 from "./src/images/day-14.svg";
import day15 from "./src/images/day-15.svg";
import day16 from "./src/images/day-16.svg";
import day18 from "./src/images/day-18.svg";
import day19 from "./src/images/day-19.svg";
import day20 from "./src/images/day-20.svg";
import day21 from "./src/images/day-21.svg";
import day22 from "./src/images/day-22.svg";
import day2324 from "./src/images/day-23-24.svg";

import "./Calendar.scss";

const Calendar = () => {
  return (
    <ul className="Calendar">
      <li className="Calendar__small">
        <Link to="/pomodoro">
          <img src={day01} alt="advent calendar day 1" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/ecommerce">
          <img src={day02} alt="advent calendar day 2" />
        </Link>
      </li>

      <li className="Calendar__small">
        <Link to="/piano">
          <img src={day03} alt="advent calendar day 3" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/keyboard">
          <img src={day04} alt="advent calendar day 4" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/podcasts">
          <img src={day05} alt="advent calendar day 5" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/slidebar">
          <img src={day06} alt="advent calendar day 6" />
        </Link>
      </li>

      <li className="Calendar__small">
        <Link to="/tipcalcultor">
          <img src={day07} alt="advent calendar day 7" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/meteo">
          <img src={day08} alt="advent calendar day 8" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/caroussel">
          <img src={day09} alt="advent calendar day 9" />
        </Link>
      </li>
      <li className="Calendar__large">
        <Link to="collapsing-sections">
          <img src={day1011} alt="advent calendar days 10 and 11" />
        </Link>
      </li>
      <li>
        <Link to="/rock-paper-scissors">
          <img
            className="Calendar__small"
            src={day12}
            alt="advent calendar day 12"
          />
        </Link>
      </li>
      <li className="Calendar__high">
        <Link to="/table-of-content">
          <img src={day1317} alt="advent calendar day 13" />
        </Link>
      </li>
      <li className="Calendar__small">
        <Link to="/calendar">
          <img src={day14} alt="advent calendar day 14" />
        </Link>
      </li>
      <li className="Calendar__small">
        <img src={day15} alt="advent calendar day 15" />
      </li>
      <li className="Calendar__small">
        <img src={day16} alt="advent calendar day 16" />
      </li>
      <li className="Calendar__small">
        <img src={day18} alt="advent calendar day 18" />
      </li>
      <li className="Calendar__small">
        <img src={day19} alt="advent calendar day 19" />
      </li>
      <li className="Calendar__high">
        <img src={day2324} alt="advent calendar days 23 and 24" />
      </li>
      <li className="Calendar__small">
        <Link to="/tabbed-content">
          <img src={day20} alt="advent calendar day 20" />
        </Link>
      </li>
      <li className="Calendar__small">
        <img src={day21} alt="advent calendar day 21" />
      </li>
      <li className="Calendar__small">
        <img src={day22} alt="advent calendar day 22" />
      </li>
    </ul>
  );
};

export default Calendar;
