import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }
  showMessage = () => {
    alert(
      "Come in " +
        this.state.name +
        ", you’re " +
        this.state.age +
        " - that’s good enough"
    );
  };
  updateTestText = (event) => {
    this.setState({ name: event.target.value });
  };
  updateAgeText = (event) => {
    this.setState({ age: event.target.value });
  };
  render() {
    return (
      <div>
        <input id="name-input" onChange={this.updateTestText} />
        <input id="age-input" onChange={this.updateAgeText} />
        <button onClick={this.showMessage}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;
