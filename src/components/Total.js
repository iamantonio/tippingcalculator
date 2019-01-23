import React, { Component } from "react";
import PropTypes from "prop-types";

class Total extends Component {
  handleChange = event => {
    this.props.inputChange(event);
  };

  c

  render() {
    return (
      <span style={{padding: 10}} className={`fields`}>
        <div className={`two wide`}>
          <input
            type="text"
            value={this.props.value}
            onChange={this.handleChange}
          />
        </div>
      </span>
    );
  }
}
Total.propTypes = {
  value: PropTypes.string
};

export default Total;
