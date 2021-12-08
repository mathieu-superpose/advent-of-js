import chevron from '../../assets/images/chevron.svg'

import displayPrice from '../../hooks/displayPrice'

import './CartItem.scss';

const CartItem = ({ item, cartUpdate }) => {
  return (
    <div className="CartItem">
      <section className="CartItem__preview">
        <div className="CartItem__preview__dish">
          <img className="CartItem__preview__dish__image" src={`./images/ecommerce/${item.image}`} alt={item.title} />
          <p className="CartItem__preview__dish__count">{item.inCart}</p>
        </div>
        <div className="CartItem__preview__details">
          <h3 className="CartItem__preview__details__title">{item.title}</h3>
          <p className="CartItem__preview__details__price">$ {displayPrice(item.price)}</p>
        </div>
      </section>
      <section className="CartItem__selection">
        <button className="CartItem__selection__button" onClick={() => cartUpdate(item.title, -1)}>
          <img className="CartItem__selection__button__minus" src={chevron} alt="chevron" />
        </button>
        <p>{item.inCart}</p>
        <button className="CartItem__selection__button" onClick={() => cartUpdate(item.title, +1)}>
          <img className="CartItem__selection__button__plus" src={chevron} alt="chevron" />
        </button>
        <div className="CartItem__selection__value">
          <p className="CartItem__selection__value__currency">$</p>
          <p className="CartItem__selection__value__price">{displayPrice(item.inCart * item.price)}</p>
        </div>
      </section>
    </div>
  )
}

export default CartItem
