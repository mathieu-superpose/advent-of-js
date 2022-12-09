import cover from "./src/img/podcast-cover.png";

import "./Podcasts.scss";

const Podcasts = () => {
  return (
    <div className="Podcasts">
      <div className="Podcasts__wrapper">
        <div className="Podcasts__wrapper__cover">
          <img src={cover} alt="Compressed.fm" />
        </div>
        <div className="Podcasts__wrapper__content">
          <h1>Listen to all the Compressed.fm Episodes</h1>

          <ul>
            <li>
              <label for="episode-1">
                <input type="checkbox" name="episode-1" id="episode-1" />
                <span>1 || Trailer</span>
              </label>
            </li>
            <li>
              <label for="episode-2">
                <input type="checkbox" name="episode-2" id="episode-2" />
                <span>2 || James Q Quick Origin Story</span>
              </label>
            </li>
            <li>
              <label for="episode-3">
                <input type="checkbox" name="episode-3" id="episode-3" />
                <span>3 || Amy Dutton's Origin Story</span>
              </label>
            </li>
            <li>
              <label for="episode-4">
                <input type="checkbox" name="episode-4" id="episode-4" />
                <span>4 || Starting a New Development Project</span>
              </label>
            </li>
            <li>
              <label for="episode-5">
                <input type="checkbox" name="episode-5" id="episode-5" />
                <span>5 || How Do you Start a New Design Project?</span>
              </label>
            </li>
            <li>
              <label for="episode-6">
                <input type="checkbox" name="episode-6" id="episode-6" />
                <span>6 || Freelancing (Part 1)</span>
              </label>
            </li>
            <li>
              <label for="episode-7">
                <input type="checkbox" name="episode-7" id="episode-7" />
                <span>7 || Freelancing (Part 2)</span>
              </label>
            </li>
            <li>
              <label for="episode-8">
                <input type="checkbox" name="episode-8" id="episode-8" />
                <span>8 || The Tech Behind jamesqquick.com</span>
              </label>
            </li>
            <li>
              <label for="episode-9">
                <input type="checkbox" name="episode-9" id="episode-9" />
                <span>9 || The Tech Behind SelfTeach.me</span>
              </label>
            </li>
            <li>
              <label for="episode-10">
                <input type="checkbox" name="episode-10" id="episode-10" />
                <span>10 || Tech Behind SelfTeach.me</span>
              </label>
            </li>
          </ul>

          <button>Mark as Played</button>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
