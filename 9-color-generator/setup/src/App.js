import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  return <>
  <section className="container">
    <h3>Color Generator</h3>
    <form >
      <input type="text" placeholder="#ff206E" className="null"/>
      <button type="submit" className="btn">Submit</button>
    </form>
  </section>
  <section className="colors"></section>
  </>
}

export default App
