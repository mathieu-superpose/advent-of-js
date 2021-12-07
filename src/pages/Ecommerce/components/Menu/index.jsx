import React, { useState } from 'react'; 

import MenuItem from '../MenuItem';

import wave from '../../assets/images/wave.svg';

import './Menu.scss';

import { data } from '../../db';

const Menu = () => {
  const [items, setItems] = useState(data);

  return (
    <div className="Menu">
      <header className="Menu__header">
        <h2 className="Menu__header__title">To Go Menu</h2>
        <img className="Menu__header__wave" src={wave} alt="wave decoration" />
      </header>
      <section className="Menu__items">
        {items && items.map((item, index) => (
          <MenuItem key={item.title} item={item} index={index} />
        ))}
      </section>
    </div>
  )
}

export default Menu
