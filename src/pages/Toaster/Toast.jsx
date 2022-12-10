import arrow from './src/img/arrow.svg'
import close from './src/img/close.svg'
import cover from './src/img/cover.jpg'

import './Toast.scss';

const Toast = ({ openToast, setOpenToast, setStopTimer }) => {
  return (
    <div className="Toast" style={{bottom: `${openToast ? "0px" : "-800px"}`}} onMouseEnter={() => setStopTimer(true)} >
      <div className="Toast__close">
        <button className="Toast__close__btn" onClick={() => setOpenToast(false)}>
          <img src={close} alt="Close" />
          <p>Close</p>
        </button>
      </div>
      <img className="Toast__cover" src={cover} alt="Compressed.fm Cover" />
      <h1 className="Toast__title">GET FREE<br />STUFF<br />IN YOUR INBOX</h1>
      <p className="Toast__description">We try to include additional information and companion resources with each podcast episode. Sign up now to be included in the fun.</p>
      <div className="Toast__email">
        <div className="Toast__email__field">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <button className="Toast__email__submit" id="submit">
          <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  )
}

export default Toast;
