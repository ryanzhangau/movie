import React from "react";
import { shallow } from "../enzyme";
import Movie from "../components/Movie";

describe("<Movie />", () => {
  const createProps = () => {
    return {
      id: "tt1375666",
      title: "Inception",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    };
  };

  it("should render moive wrap", () => {
    const props = createProps();
    const wrap = shallow(<Movie {...props} />);
    expect(wrap.find("section").length).toBe(1);
  });

  it("should render moive image", () => {
    const props = createProps();
    const wrap = shallow(<Movie {...props} />);
    expect(wrap.find("img").length).toBe(1);
  });

  it("should render moive title", () => {
    const props = createProps();
    const wrap = shallow(<Movie {...props} />);
    expect(wrap.find("h3").length).toBe(1);
  });

  it("should render moive action button", () => {
    const props = createProps("addWishList");
    const wrap = shallow(<Movie {...props} />);
    expect(wrap.find("Button").length).toBe(1);
  });
});
