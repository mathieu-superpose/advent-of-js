import Calendar from './Calendar'

import textOf from './src/images/of.svg'

import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <header className="Home__head">
        <div className="Home__head__title">
          <h1 className="Home__head__title__advent">ADVENT JS 2021</h1>
          <img className="Home__head__title__of" src={textOf} alt="of" />
        </div>
      </header>
      <main className="Home__main">
        <Calendar />
      </main>
      <footer className="Home__foot" />
    </div>
  )
}

export default Home
