import MenuItem from '../MenuItem';

import wave from '../../assets/images/wave.svg';

import './Menu.scss';

const Menu = ({ items, setItems }) => {

  const addToCart = (itemName) => {
    const newItems = items.map((i) => i.title === itemName ? { ...i, inCart: 1} : { ...i })
    setItems(newItems)
  };

  return (
    <div className="Menu">
      <header className="Menu__header">
        <h2 className="Menu__header__title">To Go Menu</h2>
        <img className="Menu__header__wave" src={wave} alt="wave decoration" />
      </header>
      <section className="Menu__items">
        {items && items.map((item, index) => (
          <MenuItem key={item.title} item={item} index={index} addToCart={addToCart} />
        ))}
      </section>
    </div>
  )
}

export default Menu
