import { useEffect, useState } from "react";

import Day from "./Day";

import "./Meteo.scss";

const nextSevenDays = () => {
  const today = new Date();
  return new Array(7)
    .fill(0)
    .map((_v, i) => new Date(new Date(today).setDate(today.getDate() + i)))
    .map((v) => ({
      date:
        v.getFullYear().toString() +
        v.getMonth().toString() +
        v.getDate().toString(),
    }));
};

const Meteo = () => {
  const [loaded, setLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState({ lon: 0, lat: 0 });
  const [days, setDays] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }, []);

  useEffect(() => {
    if (!coordinates.lon && !coordinates.lat) return;

    fetch(
      `https://www.7timer.info/bin/api.pl?lon=${coordinates.lon}&lat=${coordinates.lat}&product=civillight&output=json`
    )
      .then((response) => response.json())
      .then(({ dataseries }) => {
        setDays(dataseries);
        setLoaded(true);
      });
  }, [coordinates]);

  return (
    <div className="Meteo">
      <ul className="Meteo__list">
        {days.map((day) => (
          <Day key={day.date} loaded={loaded} day={day} />
        ))}
      </ul>
    </div>
  );
};

export default Meteo;
