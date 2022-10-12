import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie: Movie) => (
      <li key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);