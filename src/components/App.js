import React, { Component } from "react";
import Total from "./Total";
import Button from "./Button";
import calculate from "../logic/calculate";
import Result from "./Result";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tip: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleClick = buttonName => {
    console.log(buttonName);
    this.setState(calculate(this.state.value, buttonName));
  };
  render() {
    return (
      <div className={`ui container center aligned`}>
        <Header />
        <Total value={this.state.value} inputChange={this.handleChange} />
        <Button percent="10%" clickHandler={this.handleClick} />
        <Button percent="15%" clickHandler={this.handleClick} />
        <Button percent="20%" clickHandler={this.handleClick} />
        <Result tipAmount={this.state.tip} />
        <Button percent="Reset" clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
