import { useState } from "react";

import question1 from "./src/img/question-1.svg";
import question2 from "./src/img/question-2.svg";

import "./CollapsingSections.scss";

const QUESTIONS = [
  {
    content:
      "Technically, Svelte is a library and SvelteKit is a framework. What's the difference?",
    answer: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
      "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    content: "Do you provide a certificate of completion?",
    answer: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
      "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
];

const CollapsingSections = () => {
  return (
    <div className="CollapsingSections">
      <ul className="CollapsingSections__list">
        {QUESTIONS.map((question) => (
          <li key={question.content}>
            <CollapsingContent text={question} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CollapsingContent = ({ text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="CollapsingContent">
      <Question
        text={text.content}
        open={open}
        setOpen={setOpen}
      />

      <div className={`CollapsingContent__answer${open ? "--open" : ""}`}>
        {text.answer.map((answer, id) => (
          <p key={id}>{answer}</p>
        ))}
      </div>
    </div>
  );
};

const Question = ({ text, open, setOpen }) => {

  const handleExpandClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <a className={`Question${open ? "--expanded" : ""}`} href="#" onClick={(e) => handleExpandClick(e)}>
      <div className="Question__ctn">
        <div className="Question__ctn__question-mark">
          <img src={open ? question2 : question1} alt="question-mark icon" />
        </div>

        <div className="Question__ctn__content">{text}</div>
      </div>
    </a>
  );
};

export default CollapsingSections;


