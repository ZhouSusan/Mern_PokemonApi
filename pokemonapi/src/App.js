import './App.css';
import Pokemon from './components/Pokemon';
import React, {useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="App">
      <Pokemon pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
