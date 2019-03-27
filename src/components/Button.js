import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  click() {
    const { id } = this.props;
  }
  render() {
    return <button onClick={() => this.click()}>test</button>;
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired
};
