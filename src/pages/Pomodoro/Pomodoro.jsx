import React, { useState, useEffect } from 'react';
import Ring from './Ring';
import Timer from './Timer';
import TimerSettings from './TimerSettings';
import './Pomodoro.scss';

function Pomodoro() {
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [defaultTimer, setDefaultTimer] = useState(900);
  const [displaySettings, setDisplaySettings] = useState(false);

  return (
    <div className="Pomodoro">
      <h1 className="title">Advent of JS #01: Pomodoro App</h1>
      <div className="wrapper">
        <Ring defaultTimer={defaultTimer} started={started} ended={ended} />
        {!displaySettings && 
          <Timer defaultTimer={defaultTimer} setDefaultTimer={setDefaultTimer} started={started} setStarted={setStarted} setDisplaySettings={setDisplaySettings} ended={ended} setEnded={setEnded}/>
        }
        {displaySettings && 
          <TimerSettings defaultTimer={defaultTimer} setDefaultTimer={setDefaultTimer} setDisplaySettings={setDisplaySettings} />
        }
      </div>
    </div>
  );
}

export default Pomodoro;
