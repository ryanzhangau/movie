import React, { Component } from "react";
import Header from "./components/Header";
import { connect } from "react-redux";
import { loadMovies, loadWishlist } from "./store/movieActions";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieReducer: state.movieReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: moives => dispatch(loadMovies(moives)),
    loadWishlist: movies => dispatch(loadWishlist(movies))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
