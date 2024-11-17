import { useEffect, useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import MovieList from './components/MovieList';
import Movies from './components/Movies';
import { FaSpinner } from 'react-icons/fa';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async (query = '') => {
    setLoading(true);
    setError(null);
    const apiKey = '16e93d5b';
  
    const trimmedQuery = query.trim();
    const url = trimmedQuery
      ? `https://www.omdbapi.com/?s=${trimmedQuery}&apikey=${apiKey}`
      : `https://www.omdbapi.com/?s=marvel&apikey=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.Search) {
        setMovies(response.data.Search);
        setError(null);
      } else {
        setError('No movies found!');
        if (trimmedQuery) {
          setMovies([]);
        }
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMovieDetails = async (id) => {
    setLoading(true);
    setError(null);
    const apiKey = '16e93d5b';
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setSelectedMovie(response.data);
      setModalIsOpen(true);
    } catch (err) {
      setError('Failed to fetch movie details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-8 py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Movie Explorer</h1>
          <Search onSearch={fetchMovies} />
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-white" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <MovieList movies={movies} onMovieClick={fetchMovieDetails} />
        )}

        <Movies
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          movie={selectedMovie}
        />
      </div>
    </div>
  );
}

export default App;