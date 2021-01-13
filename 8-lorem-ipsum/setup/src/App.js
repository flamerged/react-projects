import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newParagraphs = [];

    for (let i = 0; i < amount; i++) {
      const randomNum = Math.floor(Math.random() * data.length);
      newParagraphs.push(data[randomNum]);
    }
    if (amount > 0) {
      setParagraphs(newParagraphs);
    }
    if (amount === 0) {
      console.log(amount);
      setParagraphs([]);
    }
  };

  const handleChange = (e) => {
    if (e.target.value < 1) {
      setAmount(0);
    } else {
      setAmount(e.target.value);
    }
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs &&
          paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
      </article>
    </section>
  );
}

export default App;
