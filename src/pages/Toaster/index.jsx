import { useState, useEffect } from 'react';

import Toast from './Toast'

import './Toaster.scss';

const Toaster = () => {
	const [openToast, setOpenToast] = useState(false)
	const [leave, setLeave] = useState(false)
	const [timer, setTimer] = useState(0)
	const [stopTimer, setStopTimer] = useState(false)

	useEffect(() => {
		if(leave) {
			setOpenToast(true)
			setTimer(15)
		} 
	}, [leave])

	useEffect(() => {
		if (!stopTimer && timer > 0) setTimeout(() => setTimer(timer - 1), 1000);
		if (!stopTimer && timer === 0) setOpenToast(false)
	}, [timer])

	return (
		<div className="Toaster" onMouseLeave={() => setLeave(true)}>
			<h1 className="Toaster__title">
				Toaster
			</h1>
			<p className="Toaster__explanation">
				try leaving the page
			</p>
			<Toast openToast={openToast} setOpenToast={setOpenToast} setStopTimer={setStopTimer} />
		</div>
	)
}

export default Toaster;
