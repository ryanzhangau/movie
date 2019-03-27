import React from "react";
import { shallow } from "../enzyme";
import List from "../components/List.js";

describe("<List />", () => {
  let wrapper;
  const createProps = [
    {
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Year: "2011",
      imdbID: "tt1201607",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    },
    {
      Title: "Harry Potter and the Sorcerer's Stone",
      Year: "2001",
      imdbID: "tt0241527",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<List movies={createProps} />);
  });

  it("should render list wrapper", () => {
    expect(wrapper.find(".movie-list").length).toBe(1);
  });

  it("should render movie item", () => {
    expect(wrapper.find("Movie").length).toBe(2);
  });
});
