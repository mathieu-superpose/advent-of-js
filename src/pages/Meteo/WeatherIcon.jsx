import cloudy from "./src/img/cloudy.svg";
import partlyCloudy from "./src/img/partly-cloudy.svg";
import rainy from "./src/img/rainy.svg";
import snowy from "./src/img/snowy.svg";
import stormy from "./src/img/stormy.svg";
import sunny from "./src/img/sunny.svg";

import "./WeatherIcon.scss";

const WeatherIcon = ({ type = "default" }) => {
  if (type === "cloudy" || type === "mcloudy")
    return (
      <div className="WeatherIcon">
        <img className="WeatherIcon__icon" src={cloudy} alt="clouds icon" />
      </div>
    );

  if (type === "pcloudy")
    return (
      <div className="WeatherIcon">
        <img
          className="WeatherIcon__icon"
          src={partlyCloudy}
          alt="clouds icon"
        />
      </div>
    );

  if (type === "oshower" || type === "rain" || type === "lightrain")
    return (
      <div className="WeatherIcon">
        <img className="WeatherIcon__icon" src={rainy} alt="rain icon" />
      </div>
    );

  if (type === "snow")
    return (
      <div className="WeatherIcon">
        <img className="WeatherIcon__icon" src={snowy} alt="snow icon" />
      </div>
    );

  if (type === "tsrain")
    return (
      <div className="WeatherIcon">
        <img className="WeatherIcon__icon" src={stormy} alt="storm icon" />
      </div>
    );

  if (type === "clear")
    return (
      <div className="WeatherIcon">
        <img className="WeatherIcon__icon" src={sunny} alt="sun icon" />
      </div>
    );

  return (
    <div className="WeatherIcon">
      <img className="WeatherIcon__icon" src={sunny} alt="sun icon" />
    </div>
  );
};

export default WeatherIcon;
