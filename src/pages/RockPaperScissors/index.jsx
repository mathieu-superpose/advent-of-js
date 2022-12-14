import { useState, useEffect } from "react";

import rock from "./src/img/rock.png";
import paper from "./src/img/paper.png";
import scissors from "./src/img/scissors.png";

import "./RockPaperScissors.scss";

const RockPaperScissors = () => {
  const [selected, setSelected] = useState("");
  const [computerPlay, setComputerPlay] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    getComputerPLay();
    if (selected) getWinner();
  }, [selected]);

  const getWinner = () => {
    let wins = "";
    if (selected === computerPlay) wins = "draw";
    if (selected === "rock" && computerPlay === "scissors") wins = "you";
    if (selected === "paper" && computerPlay === "rock") wins = "you";
    if (selected === "scissors" && computerPlay === "paper") wins = "you";
    if (!wins) wins = "computer";

    setWinner(wins);
  };

  const getComputerPLay = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(moves.length * Math.random());
    setComputerPlay(moves[randomIndex]);
  };

  const restart = () => {
    setWinner("");
    setSelected("");
    setComputerPlay("");
  };

  if (winner)
    return (
      <div className={`RockPaperScissors--${winner}`}>
        <div className={`RockPaperScissors--${winner}__wrapper`}>
          <YourPick pick={selected} winner={winner} />
          {winner === "draw" && <h1>draw</h1>}
          <ComputerPick pick={computerPlay} winner={winner} />

          <button
            className={`RockPaperScissors--${winner}__play-again`}
            onClick={restart}
          >
            play again?
          </button>
        </div>
      </div>
    );

  return (
    <div className="RockPaperScissors">
      <div className="RockPaperScissors__wrapper">
        <h1>pick one</h1>
        <ul>
          <li className="RockPaperScissors__wrapper__pick-one">
            <SelectButton
              image={rock}
              content={"rock"}
              setSelected={setSelected}
            />
          </li>
          <li className="RockPaperScissors__wrapper__pick-one">
            <SelectButton
              image={paper}
              content={"paper"}
              setSelected={setSelected}
            />
          </li>
          <li className="RockPaperScissors__wrapper__pick-one">
            <SelectButton
              image={scissors}
              content={"scissors"}
              setSelected={setSelected}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Pick = (choice) => {
  if (choice === "rock") return <img src={rock} alt="Rock" />;
  if (choice === "paper") return <img src={paper} alt="Paper" />;
  return <img src={scissors} alt="Scissors" />;
};

const YourPick = ({ pick, winner }) => {
  if (winner === "draw")
    return (
      <div className="Yourpick">
        <Pick choice={pick} />
      </div>
    );

  if (winner === "computer")
    return (
      <div className="Yourpick">
        <Pick choice={pick} />
      </div>
    );

  return (
    <div className="YourPick">
      <h1 className="Yourpick__you-win">You win !</h1>
      <Pick choice={pick} />
    </div>
  );
};

const ComputerPick = ({ pick, winner }) => {
  if (winner === "draw")
    return (
      <div className="ComputerPick">
        <Pick choice={pick} />
      </div>
    );

  if (winner === "you")
    return (
      <div className="ComputerPick">
        <Pick choice={pick} />
      </div>
    );

  return (
    <div className="ComputerPick">
      <h1 className="ComputerPick__computer-wins">computer win</h1>
      <Pick choice={pick} />
    </div>
  );
};

const SelectButton = ({ image, content, setSelected }) => {
  return (
    <button onClick={() => setSelected(content)}>
      <img src={image} alt={content} />
      content
    </button>
  );
};

const SelectionRPS = () => {
  return (
    <div className="RockPaperScissors">
      <div className="RockPaperScissors__wrapper">
        <h1>pick one</h1>
        <ul>
          <li className="RockPaperScissors__wrapper__pick-one">
            <button>
              <img src={rock} alt="Rock" />
              rock
            </button>
          </li>
          <li className="RockPaperScissors__wrapper__pick-one">
            <button>
              <img src={paper} alt="Paper" />
              paper
            </button>
          </li>
          <li className="RockPaperScissors__wrapper__pick-one">
            <button>
              <img src={scissors} alt="Scissors" />
              scissors
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RockPaperScissors;
