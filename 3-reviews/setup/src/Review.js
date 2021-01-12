import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]

  const checkNum = num  => {
    if (num < 0) {
      return people.length - 1
    }
    if (num > people.length - 1) {
      return 0
    }

    return num
  }

  const prevPerson = () => {
    setIndex(checkNum(index - 1))
  }

  const nextPerson = () => {
    setIndex(checkNum(index + 1))
  }

  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length)
    
    if (newIndex === index) {
      newIndex += 1;
    }
    console.log(newIndex)
    setIndex(checkNum(newIndex))
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
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
        </article>
      </section>
    </main>
  );
};

export default Review;
