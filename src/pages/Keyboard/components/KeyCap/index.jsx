const KeyCap = ({ userKey, jigglingKey, keycap }) => {
	return (
		<button className={`key ${userKey === keycap ? "pressed" : null} ${jigglingKey === keycap ? "jiggle" : null}`} >{`${keycap}`}</button>
	)
}

export default KeyCap;