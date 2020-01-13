import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import './App.css';

// http://www.omdbapi.com/?i=tt3896198&apikey=70e206aa
// http://img.omdbapi.com/?i=tt3896198&apikey=70e206aa

const App = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then(res => {
      setPokemon(res.data.results);
      console.log(res.data)
    });
  }, [])
  console.log(pokemon.results)
  return (
    <div className="App">
    {pokemon.map(poke => (
      <div>
      <h1 key={poke.id}>{poke.name}</h1>
      </div>
    ))}
    </div>
  );
}

export default App;
