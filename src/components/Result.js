import React, { Component } from "react";

class Result extends Component {
  render() {
    const isTipped = this.props.tipAmount;
    let show;

    if (isTipped) {
      show = <h2>The recommended tip amount is ${this.props.tipAmount}</h2>;
    } else {
      show = <h2>Please enter the bill amount before taxes.</h2>;
    }
    return <div style={{marginTop: 18}}>{show}</div>;
  }
}

export default Result;
