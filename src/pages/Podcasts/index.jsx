import { useEffect, useState } from "react";
import { useShiftPressed } from "./hooks/useShiftPressed";

import cover from "./src/img/podcast-cover.png";
import dataEpisodes from "./src/data/episodes.json";

import "./Podcasts.scss";

const Checkbox = ({
  description,
  title,
  listened,
  setListened,
  handleLastChecked,
}) => {
  const [checked, setChecked] = useState(listened[title] || false);

  useEffect(() => {
    const checkedList = { ...listened };
    checkedList[`${title}`] = checked;

    localStorage.setItem("is-open", JSON.stringify(checkedList));
    setListened(checkedList);
  }, [checked]);

  useEffect(() => {
    setChecked(listened[title] || false);
  }, [listened]);

  const handleCheckChange = () => {
    handleLastChecked(title);
    setChecked(!checked);
  };

  return (
    <li>
      <label htmlFor={title}>
        <input
          type="checkbox"
          checked={checked}
          name={title}
          id={title}
          onChange={handleCheckChange}
        />
        <span>{description}</span>
      </label>
    </li>
  );
};

const Podcasts = () => {
  const [episodes] = useState(Object.values(dataEpisodes));
  const [listened, setListened] = useState(
    JSON.parse(localStorage.getItem("is-open")) || {}
  );
  const [lastChecked, setLastChecked] = useState("");
  const shiftPressed = useShiftPressed();

  const handleLastChecked = (title) => {
    if (!shiftPressed) {
      setLastChecked(title);
      return null;
    }

    const previousIndex = episodes.findIndex((object) => {
      return object.title === lastChecked;
    });

    if (previousIndex === -1) {
      setLastChecked(title);
      return null;
    }

    const currentIndex = episodes.findIndex((object) => {
      return object.title === title;
    });

    if (previousIndex === currentIndex) return null;

    const appliedState = listened[episodes[previousIndex].title];
    const newListened = {...listened}

    for (let i = Math.min(previousIndex, currentIndex); i <= Math.max(previousIndex, currentIndex); i++) {
      newListened[episodes[i].title] = appliedState;
    }

    setLastChecked(title);
    setListened(newListened);
  };

  const markAll = () => {
    const newList = { ...listened };
    for (const episode of episodes) newList[episode.title] = true;

    setListened({ ...newList });
  };

  return (
    <div className="Podcasts">
      <div className="Podcasts__wrapper">
        <div className="Podcasts__wrapper__cover">
          <img src={cover} alt="Compressed.fm" />
        </div>
        <div className="Podcasts__wrapper__content">
          <h1>Listen to all the Compressed.fm Episodes</h1>

          <ul>
            {episodes.map((episode) => (
              <Checkbox
                key={episode.title}
                description={episode.description}
                title={episode.title}
                listened={listened}
                setListened={setListened}
                handleLastChecked={handleLastChecked}
              />
            ))}
          </ul>

          <button onClick={markAll}>Mark as Played</button>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
