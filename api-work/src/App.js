import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import './App.css';

// http://www.omdbapi.com/?i=tt3896198&apikey=70e206aa
// http://img.omdbapi.com/?i=tt3896198&apikey=70e206aa

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://www.omdbapi.com/?i=tt3896198&apikey=70e206aa'
      );
      setMovies(result.data);
    };
    fetchData();
  }, [])

  return (
    <div className="App">
      {movies.map(movie => (
        <li key={movie.i}>{movie.t}</li>
      ))}
    </div>
  );
}

export default App;
