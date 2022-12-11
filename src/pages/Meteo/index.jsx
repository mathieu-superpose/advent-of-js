import { useState } from "react";

import "./Meteo.scss";

const Meteo = () => {
  const [days, setDays] = useState([]);

  return (
    <div className="Meteo">
      <p>meteo</p>
    </div>
  );
};

export default Meteo;
