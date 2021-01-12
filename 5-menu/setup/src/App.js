import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items)

  const filterMenu = (category) => {
    let newMenu = []; 
    category === "all" ? newMenu = items : newMenu = items.filter(item => item.category === category);
    setMenu(newMenu)
  }

  return <main>
    <section className="menu section">
    <div className="title">
      <h2>The Menu</h2>
      <div className="underline"></div>
    </div>
      <Categories filterMenu={filterMenu} />
      <Menu menu={menu} />
    </section>
  </main>;
}

export default App;
