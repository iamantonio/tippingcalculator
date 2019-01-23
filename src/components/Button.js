import React, { Component } from "react";

class Button extends Component {
  handleClick = buttonName => {
    this.props.clickHandler(this.props.percent);
  };
  render() {
    return (
      <span>
        <div style={{ marginTop: 10 }} className={`ui animated fade button`}>
          <div className={`visible content`}>{this.props.percent}</div>
          <div className={`hidden content`} onClick={this.handleClick}>
            Calculate!
          </div>
        </div>
      </span>
    );
  }
}

export default Button;
