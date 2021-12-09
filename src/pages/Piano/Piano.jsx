import Keyboard from './components/Keyboard'

import './Piano.scss'

const Piano = () => {

  return (
    <div className="Piano">
      <header className="Piano__header">
        <h1 className="Piano__header__title">PIANO</h1>
        <p className="Piano__header__sub">ADVANT OF JS 2021 #03</p>
      </header>
      <Keyboard />
    </div>
  )
}

export default Piano
