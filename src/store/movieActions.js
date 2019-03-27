export const loadMoive = moives => {
  return {
    type: "LOAD_MOIVES",
    payload: moives
  };
};

export const loadWishlist = moives => {
  return {
    type: "LOAD_WISH_LIST",
    payload: moives
  };
};

export const addToWishlist = moivesID => {
  return { type: "ADD_TO_WISH_LIST", payload: moivesID };
};

export const removeFromWishlist = moivesID => {
  return { type: "REMOVE_FROM_WISH_LIST", payload: moivesID };
};
