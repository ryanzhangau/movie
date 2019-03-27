import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const List = props => {
  const movie = () => {
    return props.movies.map(movie => (
      <Movie
        key={movie.imdbID}
        id={movie.imdbID}
        title={movie.Title}
        image={movie.Poster}
      />
    ));
  };
  return <div className="movie-list">{movie()}</div>;
};

List.propTypes = {
  movies: PropTypes.array.isRequired
};

export default List;
