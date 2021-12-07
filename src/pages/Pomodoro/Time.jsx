import React, { useState, useEffect } from 'react';

const Time = ({ count }) => {
  const [timer, setTimer] = useState({minutes: '15', seconds: '00'});

  useEffect(() => {
    setTimer(getTime(count))
  }, [count])

  const getTime = (count) => {
    const minutes = Math.floor(count/60);
    const seconds = count - minutes * 60;
    const displayedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const displayedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return {minutes: displayedMinutes, seconds: displayedSeconds};
  }

  return (
      <div className="Time">
        <div className="minutes">
          <input type="text" value={timer.minutes} disabled />
        </div>
        <div className="colon">:</div>
        <div className="seconds">
          <input type="text" value={timer.seconds} disabled />
        </div>
      </div>
  );
}

export default Time;
