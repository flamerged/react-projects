import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    if (index < 0 ) {
      setIndex(data.length - 1)
    }

    if(index > data.length - 1){
      setIndex(0)
    }
  },[index])

  useEffect(()=> {
    let slider = setInterval(()=> {
      setIndex(index + 1)
    }, 5000);
    return () => clearInterval(slider)
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {data.map((person, personIndex) => {
          const { id, name, title, image, quote } = person;
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
        <button className="prev" onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={()=> setIndex(index + 1)}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  );
}

export default App;
