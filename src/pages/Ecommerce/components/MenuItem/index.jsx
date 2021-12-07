import './MenuItem.scss';

const getBackground = (index) => {
  const colors = ['#e1f0fe', '#fee1f0', '#eff0f6', '#f0fee1']
  return {background: colors[index%4]}
}

const displayPrice = (price) => {
  if(/.+\..+/.test(price)) return '$ ' + price.toString().replace(/(\..$)/, "$1"+"0")
  return '$ ' + price.toString().replace(/([0-9]+$)/, "$1"+".00")
}

const MenuItem = ({ item, index }) => {
  return (
    <div className="MenuItem" style={getBackground(index)}>
      <section className="MenuItem__view">
        <img className="MenuItem__view__image" src={`./images/ecommerce/${item.image}`} alt={item.title} />
      </section>
      <section className="MenuItem__details">
        <h3 className="MenuItem__details__title">{item.title}</h3>
        <h3 className="MenuItem__details__price">{displayPrice(item.price)}</h3>
      </section>
      <button className="MenuItem__addCart">Add to Cart</button>
    </div>
  )
}

export default MenuItem
