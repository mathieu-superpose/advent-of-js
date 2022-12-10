import { useState } from 'react';

import Elgado from './components/Elgado'

import desk from './images/bg.jpg'

import './CustomModal.scss'

const CustomModal = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<div className="CustomModal">
			<div className="CustomModal__container">
				<img className="CustomModal__container__bg" src={desk} alt="office table and computer" />
				<button className="CustomModal__container__btn" onClick={() => setModalVisible(true)}></button>
			</div>
			{modalVisible && <Elgado setModalVisible={setModalVisible} />}
		</div>
	)
}

export default CustomModal
