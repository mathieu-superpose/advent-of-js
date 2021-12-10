import displayPrice from '../../hooks/displayPrice'
import { salesTax } from '../../db'

import './Total.scss'

const Empty = () => {
	return (
		<div className="Total">
			<p className="Total__empty">Your Cart is Empty</p>
		</div>
	)
}

const Total = ({ bill }) => {

	if(bill === 0) return <Empty />

	return (
		<div className="Total">
			<div className="Total__subtotal">
				<p className="Total__subtotal__title">Subotal:</p>
				<p className="Total__subtotal__currency">$</p>
				<p className="Total__subtotal__price">{displayPrice(bill)}</p>
			</div>
			<div className="Total__tax">
				<p className="Total__tax__title">Tax:</p>
				<p className="Total__tax__currency">$</p>
				<p className="Total__tax__price">{displayPrice(bill * salesTax)}</p>
			</div>
			<div className="Total__total">
				<p className="Total__total__title">Total:</p>
				<p className="Total__total__currency">$</p>
				<p className="Total__total__price">{displayPrice(bill * (1 + salesTax))}</p>
			</div>
		</div>
	)
}

export default Total