const Ring = ({ defaultTimer, started, ended }) => {

  return (
    <div className="ring">
      <svg width="518" height="518" viewBox="0 0 518 518">
        {started &&
          <circle class={ended ? 'ending' : 'timeleft'} style={{
                animation: `countdown-animation ${defaultTimer}s linear`
              }} cx="259" cy="259" r="254" transform="rotate(-270 259 259)" />
          }
        }
      </svg>
    </div>
  );
}

export default Ring;
