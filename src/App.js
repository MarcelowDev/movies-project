import { useState } from 'react';

import './App.css';
import { Card } from "./components/Card";

const MOVIES = ['https://fondosmil.com/fondo/26473.jpg', 'https://img1.ak.crunchyroll.com/i/spire2/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_full.jpg']
function App() {
  return (
    <div className="App">
      <section className="text-center grid gap-2 grid-cols-4">
        <Card movies={MOVIES}/>
      </section>
      {/* <button onClick={() => setMovies(DIFFERENT_MOVIES)} className="bg-blue-400 border-2 border-red-300 text-center rounded-xl p-1 my-5">Cambiar peli</button> */}
    </div>
  );
}

export default App;
