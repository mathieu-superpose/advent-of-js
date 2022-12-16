import { useState } from "react";

import logo from "./src/img/logo.png";
import placeholder from "./src/img/placeholder.png";

import data from "./src/data/apiSample.json";

import "./YoutubeGallerie.scss";

const YoutubeGallerie = () => {
  const videos = data.items;
  const [selectedVideo, setSelectedVideo] = useState(data.items[0]);

  return (
    <div className="YoutubeGallerie">
      <div className="YoutubeGallerie__wrapper">
        <header>
          <img src={logo} alt="YouTube" />
        </header>
        <VideoViewer source={selectedVideo} />
        <SideGallery sources={videos} />
      </div>
    </div>
  );
};

const VideoViewer = ({ source }) => {
  return (
    <div className="VideoViewer">
      <div className="embed">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${source.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h1>{source.snippet.title}</h1>

      <p>{source.snippet.description}</p>
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
