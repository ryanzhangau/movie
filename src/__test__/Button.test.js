import React from "react";
import { shallow } from "../enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  let wrapper;
  const createProps = () => {
    return {
      label: "add to wishlist",
      id: "tt0066999",
      action: "addtowishlist"
    };
  };
  beforeEach(() => {
    const props = createProps();
    wrapper = shallow(<Button {...props} />);
  });

  it("should render a button", () => {
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  });

  it("should run click", () => {
    const instance = wrapper.instance();
    const click = jest.spyOn(instance, "click");
    wrapper.find("button").simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
