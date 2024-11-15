import React from 'react';
import { FaRegCalendarAlt, FaRegClock, FaStar } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';
import { SiTabelog } from 'react-icons/si';
import Modal from 'react-modal';



const Movies = ({ isOpen, onRequestClose, movie }) => {
  if (!movie) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
    <div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5'>
    <div className="relative flex items-center justify-center text-center ">
          {movie.Poster && movie.Poster !== 'N/A' && (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-[200] h-[350px] object-cover rounded-lg"
            />
          )}
          <button
            onClick={onRequestClose}
            className="absolute top-2 right-2  p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors"
          >
            <RiCloseLargeFill className="w-6 h-6 text-white" />
          </button>
        </div>
      <h2 className="text-2xl font-bold mb-2 text-center pt-2">{movie.Title}</h2>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <div className="p-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">{movie.Title}</h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FaStar className="w-5 h-5 text-yellow-500" />
              <span>{movie.imdbRating}/10</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="w-5 h-5 text-gray-600" />
              <span>{movie.Runtime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt  className="w-5 h-5 text-gray-600" />
              <span>{movie.Released}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{movie.Plot}</p>
          
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-900">Genre:</span>
              <span className="ml-2 text-gray-600">{movie.Genre}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Director:</span>
              <span className="ml-2 text-gray-600">{movie.Director}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Cast:</span>
              <span className="ml-2 text-gray-600">{movie.Actors}</span>
            </div>
          </div>
        </div>
    </div>
    </Modal>
  );
};

export default Movies;
