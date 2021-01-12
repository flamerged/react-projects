import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={openClose}>
          {isOpen && <AiOutlineMinus />}
          {!isOpen && <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <Info info={info} />}
    </article>
  );
};

const Info = ({ info }) => {
  return <p>{info}</p>;
};

export default Question;
