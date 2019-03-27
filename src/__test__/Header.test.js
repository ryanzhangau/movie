import React from "react";
import { shallow } from "../enzyme";
import Header from "../components/Header";

describe("<Header />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render header wrap", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should render logo", () => {
    expect(wrapper.find(".logo").length).toBe(1);
  });

  it("should render a title", () => {
    expect(wrapper.find(".site-title").length).toBe(1);
  });
});
