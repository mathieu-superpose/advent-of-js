import React, { useState, useEffect, useCallback } from 'react';

import KeyCap from '../KeyCap'

import { randomKey } from './randomKey.js'
import { keyFirst, keySecond, keyThird, keyFourth } from './keyList.js'

import './Board.scss'

const Board = () => {
	const [userKey, setUserKey] = useState("");
	const [jigglingKey, setJigglingKey] = useState(randomKey());

	useEffect(() => {
		console.log('coucou', userKey, jigglingKey, 'coucou')
		if(userKey === jigglingKey) {
			setJigglingKey(randomKey())
		}
	}, [userKey])

	const handleUserKeyPress = useCallback((event) => {
		const { key, keyCode } = event;
		if (
			[8, 32, 220, 221].includes(keyCode) ||
			(keyCode >= 186 && keyCode <= 191) ||
			(keyCode >= 65 && keyCode <= 90) ||
			(keyCode >= 48 && keyCode <= 57)
		) {
			setUserKey(`${key.toUpperCase()}`);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", handleUserKeyPress);
		return () => {
			window.removeEventListener("keydown", handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	const handleUserKeyRelease = useCallback((event) => {
		setUserKey("");
	}, []);

	useEffect(() => {
		window.addEventListener("keyup", handleUserKeyRelease);
		return () => {
			window.removeEventListener("keyup", handleUserKeyRelease);
		};
	}, [handleUserKeyRelease]);


	return (
		<div className="Board">
			<div className="row">
				<button className="key utility" data-key="`">`</button>
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="1" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="2" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="3" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="4" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="5" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="6" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="7" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="8" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="9" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="0" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="-" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="=" />
				<button className={`key ${userKey === "BACKSPACE" ? "pressed" : null}`} data-key="BACKSPACE">DEL</button>
		    </div>
		    <div className="row">
				<button className="key utility" data-key="TAB">Tab</button>
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="Q" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="W" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="E" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="R" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="T" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="Y" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="U" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="I" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="O" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="P" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="[" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="]" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="\" />
		    </div>
		    <div className="row">
				<button className="key utility" data-key="CAPSLOCK">CAPS</button>
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="A" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="S" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="D" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="F" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="G" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="H" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="J" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="K" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="L" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap=";" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="'" />
				<button className="key utility" data-key="ENTER">ENTER</button>
		    </div>
		    <div className="row">
				<button className="key utility" data-key="SHIFT">SHIFT</button>
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="Z" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="X" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="C" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="V" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="B" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="N" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="M" />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="," />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="." />
				<KeyCap userKey={userKey} jigglingKey={jigglingKey} keycap="/" />
				<button className="key utility" data-key="SHIFT">SHIFT</button>
		    </div>
		</div>
	)
}

export default Board;