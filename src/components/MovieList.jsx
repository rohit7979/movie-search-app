import React from 'react';
import { FaFilm } from 'react-icons/fa';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => onMovieClick(movie.imdbID)}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
             <div className="relative aspect-[3/4]">
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <FaFilm className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg leading-tight mb-1 text-gray-900">
          {movie.Title}
        </h3>
        <p className="text-sm text-gray-600">{movie.Year}</p>
      </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;





{/* <div
onClick={onClick}
className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
>
<div className="relative aspect-[2/3]">
  {movie.Poster && movie.Poster !== 'N/A' ? (
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  ) : (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <Film className="w-16 h-16 text-gray-400" />
    </div>
  )}
</div>
<div className="p-4">
  <h3 className="font-semibold text-lg leading-tight mb-1 text-gray-900">
    {movie.Title}
  </h3>
  <p className="text-sm text-gray-600">{movie.Year}</p>
</div>
</div> */}