import { useState, useEffect } from 'react';

import show from './src/img/show.svg';

import './Signup.scss';

const Signup = () => {
	const [formState, setFormState] = useState({name: "", email: "", password: "", confirmation: ""});
	const [validState, setValidState] = useState({name: undefined, email: undefined, password: undefined, confirmation: undefined});
	const [displayPassword, setDisplayPassword] = useState(false)

	const handleNameChange = (e) => {
		const name = e.target.value
		if (name === "") {
			setValidState({ ...validState, name: undefined })
		} else if(/^[\w._-]{3,12}$/.test(name)) {
			setFormState({ ...formState, name })
			setValidState({ ...validState, name: true })
		} else {
			console.log("name problem")
			setValidState({ ...validState, name: false })
		}
	}

	const handleEmailChange = (e) => {
		const email = e.target.value
		if (email === "") {
			setValidState({ ...validState, email: undefined })
		} else if(/^[\w._-]{3,15}@[\w._-]{3,12}\.\w{2,5}(.\w{2,5})?$/.test(email)) {
			setFormState({ ...formState, email })
			setValidState({ ...validState, email: true })
		} else {
			console.log("email problem")
			setValidState({ ...validState, email: false })
		}
	}

	const handlePasswordChange = (e) => {
		const password = e.target.value
		if (password === "") {
			setValidState({ ...validState, password: undefined })
		} else if(/^[\w._-]{8,15}$/.test(password)) {
			setFormState({ ...formState, password })
			setValidState({ ...validState, password: true })
		} else {
			console.log("problem")
			setValidState({ ...validState, password: false })
		}
	}

	const handleConfirmationChange = (e) => {
		const confirmation = e.target.value
		if (confirmation === "") {
			setValidState({ ...validState, confirmation: undefined })
		} else if(confirmation === formState.password) {
			setFormState({ ...formState, confirmation })
			setValidState({ ...validState, confirmation: true })
		} else {
			console.log("problem")
			setValidState({ ...validState, confirmation: false })
		}
	}

	const handleSubmit = () => {
		console.log(formState)
	}

	return (
		<div className="Signup">
			<div onSubmit={() => handleSubmit()} className="Signup__form">
				<h1 className="Signup__form__title">Signup</h1>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handleNameChange(e)}
						type="text"
						name="name"
						id="name"
						placeholder=" "
						style={{borderColor: `${validState.name === true ? "green" : validState.name === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="name">Name</label>
					<div className="Signup__form__field__error"></div>
					<div className="Signup__form__field__success"></div>
				</div>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handleEmailChange(e)} 
						type="email"
						name="email"
						id="email"
						placeholder=" "
						style={{borderColor: `${validState.email === true ? "green" : validState.email === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="email">Email</label>
					<div className="Signup__form__field__error"></div>
					<div className="Signup__form__field__success"></div>
				</div>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handlePasswordChange(e)}
						type={displayPassword ? "text" : "password"}
						name="password" id="password"
						placeholder=" "
						style={{borderColor: `${validState.password === true ? "green" : validState.password === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="password">Password</label>
					<button className="Signup__form__field__show" onClick={() => setDisplayPassword(!displayPassword)}>
						<img className="Signup__form__field__show__image" src={show} alt="eye symbol" />
					</button>
					<div className="Signup__form__field__error"></div>
					<div className="Signup__form__field__success"></div>
				</div>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handleConfirmationChange(e)}
						type={displayPassword ? "text" : "password"}
						name="confirm-password"
						id="confirm-password"
						placeholder=" "
						style={{borderColor: `${validState.confirmation === true ? "green" : validState.confirmation === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="confirm-password">Confirm Password</label>
					<button className="Signup__form__field__show" onClick={() => setDisplayPassword(!displayPassword)}>
						<img className="Signup__form__field__show__image" src={show} alt="eye symbol" />
					</button>
					<div className="Signup__form__field__error"></div>
					<div className="Signup__form__field__success"></div>
				</div>
				<div className="Signup__form__field">
					<button className="Signup__form__field__submit" onClick={() => handleSubmit()}>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Signup;
