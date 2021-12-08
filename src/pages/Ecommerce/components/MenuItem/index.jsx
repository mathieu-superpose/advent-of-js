import displayPrice from '../../hooks/displayPrice'

import check from '../../assets/images/check.svg'

import './MenuItem.scss';

const getBackground = (index) => {
  const colors = ['#e1f0fe', '#fee1f0', '#eff0f6', '#f0fee1']
  return {background: colors[index%4]}
}

const MenuItem = ({ item, index, addToCart }) => {
  return (
    <div className="MenuItem" style={getBackground(index)}>
      <section className="MenuItem__view">
        <img className="MenuItem__view__image" src={`./images/ecommerce/${item.image}`} alt={item.title} />
      </section>
      <section className="MenuItem__details">
        <h3 className="MenuItem__details__title">{item.title}</h3>
        <h3 className="MenuItem__details__price">$ {displayPrice(item.price)}</h3>
      </section>
      {item.inCart < 0 && 
        <button className="MenuItem__addCart" onClick={() => addToCart(item.title)}>Add to Cart</button>
      }
      {item.inCart >= 0 && 
        <div className="MenuItem__inCart">
          <img className="MenuItem__inCart__mark" src={check} alt="check mark" />
          <p className="MenuItem__inCart__note">In Cart</p>
        </div>
      }
    </div>
  )
}

export default MenuItem
