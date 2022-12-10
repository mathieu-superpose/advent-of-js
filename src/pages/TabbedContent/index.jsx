import { useState, useEffect } from 'react';

import Aside from './Aside';

import arrow from './src/img/right-thin-chevron.svg'

import { episodes } from './data'

import './TabbedContent.scss'

const TabbedContent = () => {
	const [selected, setSelected] = useState(episodes.slice(0, 1)[0])
	const [selectedIndex, setSelectedIndex] = useState(0)

	useEffect(() => {
		setSelected(episodes[selectedIndex])
	}, [selectedIndex])

	return (
	
	<div className="TabbedContent">
		<Aside setSelectedIndex={setSelectedIndex} />
	    <main className="TabbedContent__main">
	      <div className="TabbedContent__main__cover">
	        <img className="TabbedContent__main__cover__image" src={`./images/tabbed/${selected.image}`} alt={`Number ${selected.number}`} />
	      </div>
	      <div className="TabbedContent__main__content">
	        <h1 className="TabbedContent__main__content__title">{selected.title}</h1>
	        <p className="TabbedContent__main__content__description">{selected.description}</p>
	        <a className="TabbedContent__main__content__link" href={selected.link}>More</a>
	      </div>
	      <div className="TabbedContent__main__arrow" style={{top: `${250 + 60 * selectedIndex}px`}}>
	      	<img className="TabbedContent__main__arrow__image" src={arrow} alt="yellow menu arrow" />
	      </div>
	    </main>
	  </div>
	)
}

export default TabbedContent