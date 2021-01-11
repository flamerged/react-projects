import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFonticons,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = person[index]

  const prevPerson = () => {
    setIndex(index - 1)
  }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn">
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn">Surprise Me</button>
        </article>
      </section>
    </main>
  );
};

export default Review;
