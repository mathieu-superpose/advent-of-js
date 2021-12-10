import React, { useState, useEffect } from 'react';

import './Slidebar.scss'

const displayPrice = (price) => {
  if(/.+\..+/.test(price)) return price.toString().replace(/((\..)(.+$)?)/, "$2"+"0")
  return price.toString().replace(/([0-9]+$)/, "$1"+".00")
}

const Slidebar = () => {
	const [value, setValue] = useState("50.00")

	const handleSliderValue = (e) => {
		setValue(displayPrice(e.target.value / 100))
	}

	return (
		<div className="Slidebar">
		  <div className="Slidebar__wrapper">
		    <div className="Slidebar__wrapper__amount">
		      <sup className="Slidebar__wrapper__amount__sign">$</sup>
		      <span className="Slidebar__wrapper__amount__sum">{value}</span>
		    </div>
		    <input className="Slidebar__wrapper__slider" onChange={(e) => handleSliderValue(e)} type="range" id="priceRange" min="0" max="10000" value={100 * value} step="1" />
		    <button className="Slidebar__wrapper__buyBtn">Buy Now</button>
		  </div>
		</div>
	)
}

export default  Slidebar;
