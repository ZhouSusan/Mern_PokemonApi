import './App.css';
import Display from './components/Display';
import Pokemon from './components/Pokemon';
import React, {useState} from 'react';

function App() {

  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App">
      <Pokemon pokemons={pokemons} setPokemons={setPokemons}/>
      <Display pokemons={pokemons}/>
    </div>
  );
}

export default App;
