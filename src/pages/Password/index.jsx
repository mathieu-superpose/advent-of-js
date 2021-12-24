import { useState, useEffect } from 'react'

import "./Password.scss";

const SYMBOLS = "@#$%"
const NUMBERS = "23456789"
const LOWERCASE = "abcdefghjkmnqrstuvwxyz"
const UPPERCASE = "ABCDEFGHIJKMNPQRSTUVWXYZ"
const SIMILAR = "il1Lo0O"

const generatePassword = ({ symbols, numbers, lowercase, uppercase, similar, length }) => {
	let pool = ""
	if(symbols) pool += SYMBOLS;
	if(numbers) pool += NUMBERS;
	if(lowercase) pool += LOWERCASE;
	if(uppercase) pool += UPPERCASE;
	if(similar) pool += SIMILAR;
	if(pool.length === 0) return "select characters"
	let pass = ""
	for(let i = 0; i < length; i++) {
		const index = Math.floor(Math.random() * pool.length)
		pass += pool[index]
	}
	return pass;
}

const Password = () => {
	const [state, setState] = useState({
		symbols: false,
		numbers: false,
		lowercase: false,
		uppercase: false,
		similar: false,
		length: 12,
	})
	const [password, setPassword] = useState(generatePassword(state))

	const handleCharChange = (e) => {
		const value = e.target.value;
		setState({ ...state, length: value })
	}

	useEffect(() => {
		setPassword(generatePassword(state))
	}, [state])

	return (
		<div className="Password">
			<div className="PassCard">
				<div className="PassCard__field">
					<div className="PassCard__field__password">
						<p>{password}</p>
					</div>
					<button className="PassCard__field__copy">
						<svg
							width="55"
							height="55"
							viewBox="0 0 55 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M37.3147 2.83081H20.6332C18.1514 2.83081 16.1332 4.85131 16.1332 7.33081V38.8308C16.1332 41.3126 18.1514 43.3308 20.6332 43.3308H43.1332C45.6149 43.3308 47.6332 41.3126 47.6332 38.8308V13.1493L37.3147 2.83081ZM43.1354 38.8308H20.6332V7.33081H34.1332V16.3308H43.1332L43.1354 38.8308Z" />
							<path d="M11.6332 11.8308H7.13318V47.8308C7.13318 50.3126 9.15143 52.3308 11.6332 52.3308H38.6332V47.8308H11.6332V11.8308Z" />
						</svg>
						<span>Copied!</span>
					</button>
				</div>
				<div className="PassCard__field">
					<input
						type="range"
						name="length"
						id="length"
						min="6"
						max="32"
						defaultValue="12"
						onChange={(e) => handleCharChange(e)}
					/>
					<p><span id="lengthText">{state.length}</span> characters</p>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="symbols"
						id="symbols"
						value="true"
						defaultChecked={state.symbols}
						onClick={() => setState({ ...state, symbols: !state.symbols })}
					/>
					<label htmlFor="symbols">
						<strong>Include Symbols</strong> (@#$%)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="numbers"
						id="numbers"
						defaultChecked={state.numbers}
						onClick={() => setState({ ...state, numbers: !state.numbers })}
					/>
					<label htmlFor="numbers">
						<strong>Include Numbers</strong> (1234)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="lowercase"
						id="lowercase"
						defaultChecked={state.lowercase}
						onClick={() => setState({ ...state, lowercase: !state.lowercase })}
					/>
					<label htmlFor="lowercase">
						<strong>Include Lowercase Characters</strong> (abcd)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="uppercase"
						id="uppercase"
						defaultChecked={state.uppercase}
						onClick={() => setState({ ...state, uppercase: !state.uppercase })}
					/>
					<label htmlFor="uppercase">
						<strong>Include Uppercase Characters</strong> (ABCD)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="similar"
						id="similar"
						defaultChecked={state.similar}
						onClick={() => setState({ ...state, similar: !state.similar })}
					/>
					<label htmlFor="similar">
						<strong>Include Similar Characters</strong> (i, l, 1, L,
						o, 0, O)
					</label>
				</div>
			</div>
		</div>
	);
};

export default Password;
