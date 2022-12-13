import image01 from "./src/img/dave-hoefler-okUIdo6NxGo-unsplash.jpg";
import image02 from "./src/img/eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg";
import image03 from "./src/img/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg";
import image04 from "./src/img/jakob-owens-EwRM05V0VSI-unsplash.jpg";
import image05 from "./src/img/jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg";
import image06 from "./src/img/kellen-riggin-SIBOiXKg0Ds-unsplash.jpg";
import image07 from "./src/img/rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg";
import image08 from "./src/img/sherman-yang-VBBGigIuaDY-unsplash.jpg";
import image09 from "./src/img/silas-baisch-Wn4ulyzVoD4-unsplash.jpg";
import image10 from "./src/img/sonya-romanovska-wzdXhyi3AiM-unsplash.jpg";
import image11 from "./src/img/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg";

import chevron from "./src/img/chevron.svg";

import { useState } from "react";

import "./Caroussel.scss";

const imageList = [
  { img: image01, description: "Dave hoefler" },
  { img: image02, description: "Eugene Golovesov" },
  { img: image03, description: "Finding Dan Grinwis" },
  { img: image04, description: "Jakob Owens" },
  { img: image05, description: "Jennifer Reynolds" },
  { img: image06, description: "Kellen Riggin" },
  { img: image07, description: "Rafael Hoyos Weht" },
  { img: image08, description: "Sherman Yang" },
  { img: image09, description: "Silas Baisch" },
  { img: image10, description: "Sonya Romanovska" },
  { img: image11, description: "Vincentiu Solomon" },
];

const Caroussel = () => {
  const [selectedIndex, setSelectedIndex] = useState(5);

  return (
    <div className="Caroussel">
      <Viewer selectedIndex={selectedIndex} />
      <Selector
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Navigation
        side={"left"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Navigation
        side={"right"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
};

const Viewer = ({ selectedIndex }) => {
  return (
    <div className="Viewer">
      <img className="Viewer__image" src={imageList[selectedIndex].img} alt={"landscape picture by " + imageList[selectedIndex].description} />
      <p className="Viewer__description">Photo by {imageList[selectedIndex].description} on Unsplash</p>
    </div>
  );
};

const Selector = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <ul className="Selector">
      {imageList.map((image, id) => (
        <li 
        key={id} 
        className={`Selector__container${
          selectedIndex === id ? "--selected" : ""
        }`}
        onClick={() => setSelectedIndex(id)}
        style={{transform: `translateX(${-110 * (selectedIndex - id)}%)`}}
        >
          <img
            className={"Selector__container__image"}
            src={image.img}
            alt={"image thumbnail"}
          />
        </li>
      ))}
    </ul>
  );
};

const Navigation = ({ side = "left", selectedIndex, setSelectedIndex }) => {
  const handleNavigationClick = () => {
    const listSize = imageList.length;
    let nextIndex = selectedIndex;

    if (side === "left") {
      nextIndex -= 1;
      if (nextIndex < 0) nextIndex = listSize - 1;
    }

    if (side === "right") {
      nextIndex += 1;
      if (nextIndex === listSize - 1) nextIndex = 0;
    }

    setSelectedIndex(nextIndex);
  };

  return (
    <button className={`Navigation--${side}`} onClick={handleNavigationClick}>
      <img
        className={`Navigation--${side}__image`}
        src={chevron}
        alt={`chevron ${side} icon`}
      />
    </button>
  );
};

export default Caroussel;
