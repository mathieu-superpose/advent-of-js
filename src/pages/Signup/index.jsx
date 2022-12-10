import { useState, useEffect } from 'react';

import show from './src/img/show.svg';
import success from './src/img/success.svg';
import error from './src/img/error.svg';

import './Signup.scss';

const Signup = () => {
	const [formState, setFormState] = useState({name: "", email: "", password: "", confirmation: ""});
	const [validState, setValidState] = useState({name: "", email: "", password: "", confirmation: ""});
	const [displayPassword, setDisplayPassword] = useState(false)

	const handleNameChange = (e) => {
		const name = e.target.value
		if (name === "") {
			setValidState({ ...validState, name: "" })
		} else if(/^[\w._-]{3,12}$/.test(name)) {
			setFormState({ ...formState, name })
			setValidState({ ...validState, name: "ok" })
		} else {
			if(/[^\w._-]/.test(name)) setValidState({ ...validState, name: "no spacing or special characters" })
			if(/^[\w._-]{1,2}$/.test(name)) setValidState({ ...validState, name: "minimum 3 characters" })
			if(/^[\w._-]{13,}$/.test(name)) setValidState({ ...validState, name: "maximum 12 characters" })
		}
	}

	const handleEmailChange = (e) => {
		const email = e.target.value
		if (email === "") {
			setValidState({ ...validState, email: "" })
		} else if(/^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(email)) {
			setFormState({ ...formState, email })
			setValidState({ ...validState, email: "ok" })
		} else {
			setValidState({ ...validState, email: "not a valid format" })
		}
	}

	const handlePasswordChange = (e) => {
		const password = e.target.value
		if (password === "") {
			setValidState({ ...validState, password: "" })
		} else if(/^[\w._-]{8,15}$/.test(password)) {
			setFormState({ ...formState, password })
			setValidState({ ...validState, password: "ok" })
		} else {
			if(/[^\w._-]/.test(password)) setValidState({ ...validState, password: "no spacing or forbidden characters" })
			if(/^[\w._-]{1,7}$/.test(password)) setValidState({ ...validState, password: "minimum 8 characters" })
			if(/^[\w._-]{16,}$/.test(password)) setValidState({ ...validState, password: "maximum 15 characters" })
		}
	}

	const handleConfirmationChange = (e) => {
		const confirmation = e.target.value
		if (confirmation === "") {
			setValidState({ ...validState, confirmation: "" })
		} else if(confirmation === formState.password) {
			setFormState({ ...formState, confirmation })
			setValidState({ ...validState, confirmation: "ok" })
		} else {
			setValidState({ ...validState, confirmation: "doesn't match password" })
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
						style={{borderColor: `${validState.name === "ok" ? "green" : validState.name === "" ?  "#D4D4D4" : "red" }`}}
					/>
					<label htmlFor="name">Name</label>
					<div className="Signup__form__field__error" style={{display: `${validState.name.length > 2 ? "block" : "none"}`}}>
						<img className="Signup__form__field__error__image" src={error} alt="success logo" />
						<p className="Signup__form__field__error__text">{validState.name}</p>
					</div>
					<div className="Signup__form__field__success" style={{display: `${validState.name === "ok" ? "block" : "none"}`}}>
						<img src={success} alt="success logo" />
					</div>
				</div>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handleEmailChange(e)} 
						type="email"
						name="email"
						id="email"
						placeholder=" "
						style={{borderColor: `${validState.email === "ok" ? "green" : validState.email === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="email">Email</label>
					<div className="Signup__form__field__error" style={{display: `${validState.email.length > 2 ? "block" : "none"}`}}>
						<img className="Signup__form__field__error__image" src={error} alt="success logo" />
						<p className="Signup__form__field__error__text">{validState.email}</p>
					</div>
					<div className="Signup__form__field__success">
						<img src={success} alt="success logo" style={{display: `${validState.email === "ok" ? "block" : "none"}`}} />
					</div>
				</div>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handlePasswordChange(e)}
						type={displayPassword ? "text" : "password"}
						name="password" id="password"
						placeholder=" "
						style={{borderColor: `${validState.password === "ok" ? "green" : validState.password === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="password">Password</label>
					<button className="Signup__form__field__show" onClick={() => setDisplayPassword(!displayPassword)}>
						<img className="Signup__form__field__show__image" src={show} alt="eye symbol" />
					</button>
					<div className="Signup__form__field__error" style={{display: `${validState.password.length > 2 ? "block" : "none"}`}}>
						<img className="Signup__form__field__error__image" src={error} alt="success logo" />
						<p className="Signup__form__field__error__text">{validState.password}</p>
					</div>
					<div className="Signup__form__field__success" style={{display: `${validState.password === "ok" ? "block" : "none"}`}}>
						<img src={success} alt="success logo" />
					</div>
				</div>
				<div className="Signup__form__field">
					<input 
						onChange={(e) => handleConfirmationChange(e)}
						type={displayPassword ? "text" : "password"}
						name="confirm-password"
						id="confirm-password"
						placeholder=" "
						style={{borderColor: `${validState.confirmation === "ok" ? "green" : validState.confirmation === false ? "red" : "#D4D4D4"}`}}
					/>
					<label htmlFor="confirm-password">Confirm Password</label>
					<button className="Signup__form__field__show" onClick={() => setDisplayPassword(!displayPassword)}>
						<img className="Signup__form__field__show__image" src={show} alt="eye symbol" />
					</button>
					<div className="Signup__form__field__error" style={{display: `${validState.confirmation.length > 2 ? "block" : "none"}`}} >
						<img className="Signup__form__field__error__image" src={error} alt="error logo" />
						<p className="Signup__form__field__error__text">{validState.confirmation}</p>
					</div>
					<div className="Signup__form__field__success" style={{display: `${validState.confirmation === "ok" ? "block" : "none"}`}}>
						<img src={success} alt="success logo"/>
					</div>
				</div>
				<div className="Signup__form__field">
					<button className="Signup__form__field__submit" onClick={() => handleSubmit()}>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Signup;
