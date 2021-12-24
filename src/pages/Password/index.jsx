import "./Password.scss";

const Password = () => {
	return (
		<div className="Password">
			<div className="PassCard">
				<div className="PassCard__field">
					<input
						type="text"
						name="password"
						id="password"
						value=""
						min="6"
						max="32"
						steps="1"
					/>
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
						value="12"
						min="6"
						max="32"
					/>
					<span id="lengthText">12</span> characters
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="symbols"
						id="symbols"
						value="true"
						checked="true"
					/>
					<label for="symbols">
						<strong>Include Symbols</strong> (@#$%)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="numbers"
						id="numbers"
						checked="true"
					/>
					<label for="numbers">
						<strong>Include Numbers</strong> (1234)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="lowercase"
						id="lowercase"
						checked="true"
					/>
					<label for="lowercase">
						<strong>Include Lowercase Characters</strong> (abcd)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="uppercase"
						id="uppercase"
						checked="true"
					/>
					<label for="uppercase">
						<strong>Include Uppercase Characters</strong> (ABCD)
					</label>
				</div>
				<div className="PassCard__field">
					<input
						type="checkbox"
						name="similar"
						id="similar"
						checked="true"
					/>
					<label for="similar">
						<strong>Include Similar Characters</strong> (i, l, 1, L,
						o, 0, O)
					</label>
				</div>
			</div>
		</div>
	);
};

export default Password;
