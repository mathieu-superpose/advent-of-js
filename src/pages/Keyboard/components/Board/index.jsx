import React, { useState, useEffect, useCallback } from 'react';

import './Board.scss'

const Board = () => {
	const [userKey, setUserKey] = useState("");
	const handleUserKeyPress = useCallback(event => {
	    const { key, keyCode } = event;
	    if([8, 32, 220, 221].includes(keyCode)|| (keyCode >= 186 && keyCode <= 191) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 48 && keyCode <= 57)){
	        setUserKey(`${key.toUpperCase()}`);
	    }
	}, []);

	useEffect(() => {
	    window.addEventListener("keydown", handleUserKeyPress);
	    return () => {
	        window.removeEventListener("keydown", handleUserKeyPress);
	    };
	}, [handleUserKeyPress]);

	const handleUserKeyRelease = useCallback(event => {
	    setUserKey('');
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
		      <button className={`key ${userKey === "1" ? "pressed" : null}`} data-key="1">1</button>
		      <button className={`key ${userKey === "2" ? "pressed" : null}`} data-key="2">2</button>
		      <button className={`key ${userKey === "3" ? "pressed" : null}`} data-key="3">3</button>
		      <button className={`key ${userKey === "4" ? "pressed" : null}`} data-key="4">4</button>
		      <button className={`key ${userKey === "5" ? "pressed" : null}`} data-key="5">5</button>
		      <button className={`key ${userKey === "6" ? "pressed" : null}`} data-key="6">6</button>
		      <button className={`key ${userKey === "7" ? "pressed" : null}`} data-key="7">7</button>
		      <button className={`key ${userKey === "8" ? "pressed" : null}`} data-key="8">8</button>
		      <button className={`key ${userKey === "9" ? "pressed" : null}`} data-key="9">9</button>
		      <button className={`key ${userKey === "0" ? "pressed" : null}`} data-key="0">0</button>
		      <button className={`key ${userKey === "-" ? "pressed" : null}`} data-key="-">-</button>
		      <button className={`key ${userKey === "=" ? "pressed" : null}`} data-key="=">=</button>
		      <button className={`key ${userKey === "BACKSPACE" ? "pressed" : null}`} data-key="BACKSPACE">DEL</button>
		    </div>
		    <div className="row">
		      <button className="key utility" data-key="TAB">Tab</button>
		      <button className={`key ${userKey === "Q" ? "pressed" : null}`} data-key="Q">Q</button>
		      <button className={`key ${userKey === "W" ? "pressed" : null}`} data-key="W">W</button>
		      <button className={`key ${userKey === "E" ? "pressed" : null}`} data-key="E">E</button>
		      <button className="key jiggle" data-key="R">R</button>
		      <button className={`key ${userKey === "T" ? "pressed" : null}`} data-key="T">T</button>
		      <button className={`key ${userKey === "Y" ? "pressed" : null}`} data-key="Y">Y</button>
		      <button className={`key ${userKey === "U" ? "pressed" : null}`} data-key="U">U</button>
		      <button className={`key ${userKey === "I" ? "pressed" : null}`} data-key="I">I</button>
		      <button className={`key ${userKey === "O" ? "pressed" : null}`} data-key="O">O</button>
		      <button className={`key ${userKey === "P" ? "pressed" : null}`} data-key="P">P</button>
		      <button className={`key ${userKey === "[" ? "pressed" : null}`} data-key="[">[</button>
		      <button className={`key ${userKey === "]" ? "pressed" : null}`} data-key="]">]</button>
		      <button className={`key ${userKey === "\\" ? "pressed" : null}`} data-key="\">\</button>
		    </div>
		    <div className="row">
		      <button className="key utility" data-key="CAPSLOCK">CAPS</button>
		      <button className={`key ${userKey === "A" ? "pressed" : null}`} data-key="A">A</button>
		      <button className={`key ${userKey === "S" ? "pressed" : null}`} data-key="S">S</button>
		      <button className={`key ${userKey === "D" ? "pressed" : null}`} data-key="D">D</button>
		      <button className={`key ${userKey === "F" ? "pressed" : null}`} data-key="F">F</button>
		      <button className={`key ${userKey === "G" ? "pressed" : null}`} data-key="G">G</button>
		      <button className={`key ${userKey === "H" ? "pressed" : null}`} data-key="H">H</button>
		      <button className={`key ${userKey === "J" ? "pressed" : null}`} data-key="J">J</button>
		      <button className={`key ${userKey === "K" ? "pressed" : null}`} data-key="K">K</button>
		      <button className={`key ${userKey === "L" ? "pressed" : null}`} data-key="L">L</button>
		      <button className={`key ${userKey === ";" ? "pressed" : null}`} data-key=";">;</button>
		      <button className={`key ${userKey === "'" ? "pressed" : null}`} data-key="'">'</button>
		      <button className="key utility" data-key="ENTER">ENTER</button>
		    </div>
		    <div className="row">
		      <button className="key utility" data-key="SHIFT">SHIFT</button>
		      <button className={`key ${userKey === "Z" ? "pressed" : null}`} data-key="Z">Z</button>
		      <button className={`key ${userKey === "X" ? "pressed" : null}`} data-key="X">X</button>
		      <button className={`key ${userKey === "C" ? "pressed" : null}`} data-key="C">C</button>
		      <button className={`key ${userKey === "V" ? "pressed" : null}`} data-key="V">V</button>
		      <button className={`key ${userKey === "B" ? "pressed" : null}`} data-key="B">B</button>
		      <button className={`key ${userKey === "N" ? "pressed" : null}`} data-key="N">N</button>
		      <button className={`key ${userKey === "M" ? "pressed" : null}`} data-key="M">M</button>
		      <button className={`key ${userKey === "," ? "pressed" : null}`} data-key=",">,</button>
		      <button className={`key ${userKey === "." ? "pressed" : null}`} data-key=".">.</button>
		      <button className={`key ${userKey === "/" ? "pressed" : null}`} data-key="/">/</button>
		      <button className="key utility" data-key="SHIFT">SHIFT</button>
		    </div>
		</div>
	)
}

export default Board;