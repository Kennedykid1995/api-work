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
      setPokemon(res.data);
      console.log(res.data)
    });
  }, [])
  return (
    <div className="App">
      {pokemon.map(poke => (
        <h1>{poke.name}</h1>
      ))}
    </div>
  );
}

export default App;
