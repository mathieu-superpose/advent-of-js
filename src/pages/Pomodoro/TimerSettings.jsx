import Time from './Time';

import arrow from './images/arrow.svg';

const TimerSettings = ({ defaultTimer, setDefaultTimer, setDisplaySettings }) => {

  const increaseMinutes = () => {
    if(defaultTimer <= 3539) setDefaultTimer(defaultTimer + 60)
  }

  const decreaseMinutes = () => {
    if(defaultTimer >= 61 ) setDefaultTimer(defaultTimer - 60)
  }

  const increaseSeconds = () => {
    if(defaultTimer <= 3598) setDefaultTimer(defaultTimer + 1)
  }

  const decreaseSeconds = () => {
    if(defaultTimer >= 2 ) setDefaultTimer(defaultTimer - 1)
  }

  return (
    <div className="TimerSettings">
      <div className="settingBtns">
        <button className="increaseBtn" onClick={() => increaseMinutes()}>
          <img className="arrow" src={arrow} alt="Up arrow" />
        </button>
        <button className="increaseBtn" onClick={() => increaseSeconds()}>
          <img className="arrow" src={arrow} alt="Up arrow" />
        </button>
      </div>
      <Time count={defaultTimer} />
      <div className="settingBtns">
        <button className="decreaseBtn" onClick={() => decreaseMinutes()}>
          <img className="arrow" src={arrow} alt="Down arrow" />
        </button>
        <button className="decreaseBtn" onClick={() => decreaseSeconds()}>
          <img className="arrow" src={arrow} alt="Down arrow" />
        </button>
      </div>
      <button className="back" onClick={() => setDisplaySettings(false)}>back</button>
    </div>
  );
}

export default TimerSettings;
