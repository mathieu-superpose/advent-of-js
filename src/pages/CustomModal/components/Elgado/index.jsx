import close from '../../images/close.svg'
import elgado from '../../images/elgato-key-light.png'

import './Elgado.scss'

const Elgado = ({ setModalVisible }) => {
	return (
		<div className="Elgado">
			<div className="Elgado__card">
				<button className="Elgado__card__close" onClick={() => setModalVisible(false)}>
					<img className="Elgado__card__close__cross" onClick={() => setModalVisible(false)} src={close} alt="cross closing button" />
				</button>
				<section className="Elgado__card__text">
					<h1 className="Elgado__card__text__title">ELGADO KEY LIGHTS</h1>
					<p className="Elgado__card__text__intro">These lights are great if you shoot video at your desk.</p>
					<p className="Elgado__card__text__main">My desk is push ip against the wall, so I didn't have room for a large soft box. These lights still deliver on the look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and temperature.</p>
					<button className="Elgado__card__text__btn">BUY NOW for $169.99</button>
				</section>
				<section className="Elgado__card__image">
					<img className="Elgado__card__image__elgado" src={elgado} alt="elgado key light" />
				</section>
			</div>
		</div>
	)
}

export default Elgado;
