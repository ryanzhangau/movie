const initState = {
  movies: [],
  wishlist: [],
  view: "movie"
};

const movieReducer = (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "LOAD_MOVIES":
      return { ...newState, movies: action.payload };
    case "LOAD_WISH_LIST":
      return { ...newState, wishlist: action.payload };
    case "ADD_TO_WISH_LIST":
      const movie = newState.wishlist.filter(m => m.imdbID === action.payload);
      if (movie.length === 0)
        return {
          ...newState,
          whishlist: [...newState.wishlist, action.payload]
        };
      return newState;
    case "REMOVE_FROM_WISH_LIST":
      const wishList = newState.wishList.map(m => m.imdbID !== action.payload);
      return { ...newState, wishList: wishList };
    default:
      return state;
  }
};

export default movieReducer;
