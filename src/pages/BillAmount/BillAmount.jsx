import React, { useState, useEffect } from 'react'


import "./BillAmount.scss";

const BillAmount = () => {
	const [bill, setBill] = useState("102.02")
	const [alertBill, setAlertBill] = useState(false)
	const [people, setPeople] = useState("3")
	const [alertPeople, setAlertPeople] = useState(false)
	const [tip, setTip] = useState(15)
	const [tipAmount, setTipAmount] = useState(15.30)
	const [totalPP, setTotalPP] = useState(15)


	const handlePeopleChange = (e) => {
		const peopleInput = e.target.value
		if(/[0-9]{1,2}/.test(peopleInput)) {
			setAlertPeople(false)
			setPeople(peopleInput)
		} else {
			setAlertPeople(true)
		}
	}

	const handleBillChange = (e) => {
		console.log(e.target.value)
		const billInput = e.target.value
		if(/[0-9]{1,5}(.[0-9]{1,2})?/.test(billInput)) {
			setAlertBill(false)
			setBill(billInput)
		} else {
			setAlertBill(true)
		}
	}

	const handleTipChange = (e) => {
		
	}

	useEffect(() => {
		setTipAmount((+bill * tip / 100).toFixed(2))
		const perPerson = (+bill + +tipAmount) / +people
		setTotalPP(perPerson.toFixed(2))
	}, [bill, people, tip])

	return (
		<div className="BillAmount">
			<div className="BillAmount__wrapper">
				<div className="BillAmount__wrapper__tip-amount">
					<div className="BillAmount__wrapper__tip-amount__label">
						Tip Amount
					</div>
					<div className="BillAmount__wrapper__tip-amount__dollars">
						<sup>$</sup>
						<span id="tip-amount">{tipAmount}</span>
					</div>
				</div>
				<div className="BillAmount__wrapper__total-per-person">
					<div className="BillAmount__wrapper__total-per-person__label">
						Total Per Person
					</div>
					<div className="BillAmount__wrapper__total-per-person__dollars">
						<sup>$</sup>
						<span id="total-per-person">{totalPP}</span>
					</div>
				</div>

				<div className="BillAmount__wrapper__input-fields">
					<div className="BillAmount__wrapper__input-fields__bill-amount">
						<div className="BillAmount__wrapper__input-fields__bill-amount__field">
							<input
								className="BillAmount__wrapper__input-fields__bill-amount__field__input"
								type="text"
								id="bill-amount"
								name="bill-amount"
								defaultValue="102.02"
								onChange={(e) => handleBillChange(e)}
							/>
						</div>
						<div className="label">Bill Amount</div>
					</div>
					<div className="BillAmount__wrapper__input-fields__number-of-people">
						<div className="BillAmount__wrapper__input-fields__number-of-people__field">
							<input
								className="BillAmount__wrapper__input-fields__number-of-people__field__input"
								type="text"
								id="number-of-people"
								name="number-of-people"
								defaultValue="3"
								onChange={(e) => handlePeopleChange(e)}
							/>
						</div>
						<div className="label">Number of People</div>
					</div>
				</div>

				<div className="BillAmount__wrapper__tip-percentages">
					<div>
						<input
							type="radio"
							name="tip"
							defaultValue="5%"
							id="five-percent"
							checked={tip === 5}
						/>
						<label onClick={() => setTip(5)} id="five-percent">5%</label>
					</div>
					<div>
						<input
							type="radio"
							name="tip"
							defaultValue="10%"
							id="ten-percent"
							checked={tip === 10}
						/>
						<label onClick={() => setTip(10)} id="ten-percent">10%</label>
					</div>
					<div>
						<input
							type="radio"
							name="tip"
							defaultValue="15%"
							id="fifteen-percent"
							checked={tip === 15}
						/>
						<label onClick={() => setTip(15)} id="fifteen-percent">15%</label>
					</div>
					<div>
						<input
							type="radio"
							name="tip"
							defaultValue="20%"
							id="twenty-percent"
							checked={tip === 20}
						/>
						<label onClick={() => setTip(20)} id="twenty-percent">20%</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillAmount;
