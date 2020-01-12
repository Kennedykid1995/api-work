import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import './App.css';

// http://www.omdbapi.com/?i=tt3896198&apikey=70e206aa
// http://img.omdbapi.com/?i=tt3896198&apikey=70e206aa

function App() {

  const [pokemon, setPokemon] = useState({pokedex: []})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
      );
      setPokemon(result.data);
      console.log(result); 
    };
    fetchData();
  }, [])

  return (
    <div className="App">
      {pokemon.pokedex.map(poke => (
        <li>{poke.name}</li>
      )
      )}
    </div>
  );
}

export default App;
