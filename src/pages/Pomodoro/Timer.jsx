import React, { useState, useEffect } from 'react';

import Time from './Time';

import gear from './images/gear.svg';
import check from './images/check.svg';

function Timer({ defaultTimer, setDefaultTimer, started, setStarted, setDisplaySettings, ended, setEnded }) {
  const [count, setCount] = useState(900);

  useEffect(() => {
    if(!started) resetTimer();
    if(started && count > 0) {
      const interval = setInterval(() => {
        setCount(count - 1)
      }, 1000);
      return () => clearInterval(interval);
    }
    if(count === 0) setEnded(true);
  }, [count, started])

  useEffect(() => {
    resetTimer();
  }, [defaultTimer])

  const resetTimer = () => {
    if(ended) setEnded(false);
    setCount(defaultTimer);
  }

  const accesSettings = () => {
    setStarted(false)
    resetTimer()
    setDisplaySettings(true)
  }

  return (
    <div className="Timer">
      <Time count={count} />
      {ended && 
        <button className="finished" onClick={() => setStarted(!started)}>Finished! Restart?</button>
      }
      {!ended &&
        <button className="start" onClick={() => setStarted(!started)}>{started ? "stop" : "start"}</button>
      }
      <button className="settings">
        <img onClick={() => accesSettings()} src={gear} alt="Settings" />
      </button>
    </div>
  );
}

export default Timer;
