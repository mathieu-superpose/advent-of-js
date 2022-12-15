import logo from "./src/img/logo.png";
import placeholder from "./src/img/placeholder.png";

import data from "./src/data/apiSample.json";

import "./YoutubeGallerie.scss";

const YoutubeGallerie = () => {
  const videos = data.items;

  return (
    <div className="YoutubeGallerie">
      <SideGallery sources={videos} />
    </div>
  );
};

const SideGallery = ({ sources }) => {
  return (
    <aside className="SideGallery">
      <ul className="SideGallery__list">
        {sources.map((source) => (
          <li key={source.etag}>
            <a className="video">
              <img
                src={source.snippet.thumbnails.default.url}
                alt={source.snippet.description}
              />
              <h3>{source.snippet.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default YoutubeGallerie;
