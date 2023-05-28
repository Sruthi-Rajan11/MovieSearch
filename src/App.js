import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import SearchIcon from './search.svg';
//f70c051d
import MovieCard from './MovieCard';
const API_URL = 'https://www.omdbapi.com/?apikey=f70c051d';

const App = () => {
  const [movies,setMovies]= useState([]);
  const [searchTerm,setSearchTerm]= useState([]);

  const searchMovies = async (Title) => {
    const response =   await fetch(`${API_URL}&s=${Title}`);
    const data =  await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('spiderman');
  }, []);
  return(
    <div className='app'>
<h1>MovieLand</h1>
<div className='search'>
<input placeholder='Search for movies'
  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
  <img src={SearchIcon} alt="search"onClick={()=>searchMovies(searchTerm)}/>
  </div>
{
  movies.length>0?(<div className='container'>{movies.map((movie)=>(<MovieCard movie={movie}/>))}</div>):(<div className='empty'><h2>No Movies Found</h2>
</div>)}
</div>
  );
}

export default App;
