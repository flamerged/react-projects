import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <List people={people} setPeople={setPeople}></List>
    </main>
  );
}

export default App;
