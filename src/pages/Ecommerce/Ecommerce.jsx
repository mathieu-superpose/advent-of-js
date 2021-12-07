import AppTitle from './components/AppTitle';
import Menu from './components/Menu';

import bgLeft from './assets/images/bg__left.svg';
import bgBtmRight from './assets/images/bg__btm-right.svg';
import bgTopRight from './assets/images/bg__top-right.svg';

import './Ecommerce.scss'

function Ecommerce() {

  return (
    <div className="Ecommerce">
      <img className="Ecommerce__bgLeft" src={bgLeft} alt="background decoration" />
      <img className="Ecommerce__bgTopRight" src={bgTopRight} alt="background decoration" />
      <img className="Ecommerce__bgBtmRight" src={bgBtmRight} alt="background decoration" />
      <AppTitle />
      <Menu />
    </div>
  )
}

export default Ecommerce
