import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Movie = props => {
  const { title, id, image } = props;
  return (
    <section>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <h3>{title}</h3>
      <Button id={id} />
    </section>
  );
};

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Movie;
