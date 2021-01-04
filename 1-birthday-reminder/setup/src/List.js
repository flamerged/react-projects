import React from "react";

const List = ({people, setPeople}) => {
  return (
    <>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <ul>
          {people.map((person) => {
            return (
              <li key={person.id} className="person">
                <img src={person.image}></img>
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.age}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn" onClick={() => {setPeople([])} }>Clear All</button>
      </div>
    </>
  );
};

export default List;
