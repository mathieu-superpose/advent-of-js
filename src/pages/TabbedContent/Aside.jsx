import logo from './src/img/logo.svg'

import { episodes } from './data'

import './Aside.scss'

const Episode = ({ ep, setSelectedIndex, index }) => (
	<li className="Episode">
		<a onClick={() => setSelectedIndex(index)}>
			<div className="Episode__name">{`Episode ${ep.number}`}</div>
	     <div className="Episode__title">{ep.title}</div>
		</a>
  </li>
)

const Aside = ({ setSelectedIndex }) => {
	return (
		<aside className="Aside">
      <a className="Aside__title" href="http://compressed.fm" target="_blank"><img src={logo} alt="Compressed.fm" /></a>
      <ul className="Aside__episodes" id="tabs">
        {episodes && episodes.map((ep, index) =>
        	<Episode key={ep.number} ep={ep} setSelectedIndex={setSelectedIndex} index={index} />
        )}
      </ul>
    </aside>
	)
}

export default Aside;
