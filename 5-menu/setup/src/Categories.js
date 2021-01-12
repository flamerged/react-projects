import React from "react";

const Categories = ({ filterMenu }) => {
  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterMenu("all")}
      >
        All
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterMenu("breakfast")}
      >
        Breakfast
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterMenu("lunch")}
      >
        Lunch
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterMenu("shakes")}
      >
        Shakes
      </button>
    </div>
  );
};

export default Categories;
