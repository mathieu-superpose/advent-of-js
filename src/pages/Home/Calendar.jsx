import { Link } from "react-router-dom";
import day01 from './src/images/day-01.svg'
import day02 from './src/images/day-02.svg'
import day03 from './src/images/day-03.svg'
import day04 from './src/images/day-04.svg'
import day05 from './src/images/day-05.svg'
import day06 from './src/images/day-06.svg'
import day07 from './src/images/day-07.svg'
import day08 from './src/images/day-08.svg'
import day09 from './src/images/day-09.svg'
import day1011 from './src/images/day-10-11.svg'
import day12 from './src/images/day-12.svg'
import day1317 from './src/images/day-13-17.svg'
import day14 from './src/images/day-14.svg'
import day15 from './src/images/day-15.svg'
import day16 from './src/images/day-16.svg'
import day18 from './src/images/day-18.svg'
import day19 from './src/images/day-19.svg'
import day20 from './src/images/day-20.svg'
import day21 from './src/images/day-21.svg'
import day22 from './src/images/day-22.svg'
import day2324 from './src/images/day-23-24.svg'


import './Calendar.scss'

const Calendar = () => {
  return (
    <div className="Calendar">
      <Link to="/pomodoro"><img className="Calendar__small" src={day01} alt="advent calendar day 1" /></Link>
      <Link to="/ecommerce"><img className="Calendar__small" src={day02} alt="advent calendar day 2" /></Link>
      <Link to="/piano"><img className="Calendar__small" src={day03} alt="advent calendar day 3" /></Link>
      <Link to="/keyboard"><img className="Calendar__small" src={day04} alt="advent calendar day 4" /></Link>
      <img className="Calendar__small" src={day05} alt="advent calendar day 5" />
      <img className="Calendar__small" src={day06} alt="advent calendar day 6" />
      <img className="Calendar__small" src={day07} alt="advent calendar day 7" />
      <img className="Calendar__small" src={day08} alt="advent calendar day 8" />
      <img className="Calendar__small" src={day09} alt="advent calendar day 9" />
      <img className="Calendar__large" src={day1011} alt="advent calendar days 10 and 11" />
      <img className="Calendar__small" src={day12} alt="advent calendar day 12" />
      <img className="Calendar__high13" src={day1317} alt="advent calendar day 13" />
      <img className="Calendar__small" src={day14} alt="advent calendar day 14" />
      <img className="Calendar__small" src={day15} alt="advent calendar day 15" />
      <img className="Calendar__small" src={day16} alt="advent calendar day 16" />
      <img className="Calendar__small" src={day18} alt="advent calendar day 18" />
      <img className="Calendar__small" src={day19} alt="advent calendar day 19" />
      <img className="Calendar__small" src={day20} alt="advent calendar day 20" />
      <img className="Calendar__small" src={day21} alt="advent calendar day 21" />
      <img className="Calendar__small" src={day22} alt="advent calendar day 22" />
      <img className="Calendar__high24" src={day2324} alt="advent calendar days 23 and 24" />
    </div>
  )
}

export default Calendar
