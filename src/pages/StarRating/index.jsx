import { useState } from "react";

import starImg from "./src/img/star.svg";

import "./StarRating.scss";

const StarRating = () => {
  return (
    <div className="StarRating">
      <StarRatingComponent length={5} />
    </div>
  );
};

const initStarsState = (length) => {
  return new Array(length)
    .fill({ isActive: false, isHovered: false })
    .map((star, index) => {
      return { ...star, index: index };
    });
};

const StarRatingComponent = ({ length }) => {
  const [stars, setStars] = useState(initStarsState(length));

  const handleStarClick = (index) => {
    const updatedStars = stars.map((star, i) => {
      return {
        ...star,
        isActive: i <= index,
      };
    });

    setStars(updatedStars);
  };

  const handleStarOverEnter = (index) => {
    const updatedStars = stars.map((star, i) => {
      return {
        ...star,
        isHovered: i <= index,
      };
    });

    setStars(updatedStars);
  };

  const handleStarOverLeave = (index) => {
    const updatedStars = stars.map((star, i) => {
      return {
        ...star,
        isHovered: false,
      };
    });

    setStars(updatedStars);
  };

  return (
    <ul className="StarRatingComponent">
      {stars.map((star) => (
        <li key={star.index}>
          <Star
            starState={star}
            handleStarClick={handleStarClick}
            handleStarOverEnter={handleStarOverEnter}
            handleStarOverLeave={handleStarOverLeave}
          />
        </li>
      ))}
    </ul>
  );
};

const Star = ({
  starState,
  handleStarClick,
  handleStarOverEnter,
  handleStarOverLeave,
}) => {
  const { index, isActive, isHovered } = starState;

  const getStyle = () => {
    if (isActive && isHovered)
      return {
        fill: "#CCA800",
      };
    if (isActive)
      return {
        fill: "#FFD200",
      };
    if (isHovered)
      return {
        fill: "#CCCCCC",
        stroke: "#757575",
        strokeWidth: "10px",
      };
    return {
      stroke: "#757575",
      strokeWidth: "10px",
    };
  };

  return (
    <div
      className="Star"
      onClick={() => handleStarClick(index)}
      onMouseEnter={() => handleStarOverEnter(index)}
      onMouseLeave={() => handleStarOverLeave(index)}
    >
      <svg
        width="152"
        height="151"
        viewBox="-10 -10 165 165"
        fill="none"
        style={getStyle()}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M116.805 149.588C118.072 150.433 119.534 150.855 120.989 150.855C122.55 150.855 124.11 150.372 125.437 149.407C127.985 147.545 129.101 144.289 128.234 141.251L114.378 92.7403L148.934 58.1838C151.09 56.0354 151.731 52.7863 150.57 49.9669C149.409 47.155 146.65 45.3156 143.605 45.3156H103.04L82.505 4.25334C79.9495 -0.850234 71.5742 -0.850234 69.0186 4.25334L48.4837 45.3156H7.91146C4.86591 45.3156 2.10681 47.155 0.945881 49.9669C-0.215049 52.7863 0.425724 56.0354 2.58174 58.1838L37.1383 92.7403L23.2825 141.251C22.4156 144.289 23.5313 147.545 26.0793 149.407C28.6424 151.277 32.0875 151.337 34.7109 149.588L75.758 122.223L116.805 149.588Z" />
      </svg>
    </div>
  );
};

export default StarRating;
