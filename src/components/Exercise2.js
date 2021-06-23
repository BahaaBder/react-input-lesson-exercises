import React, { Component } from "react";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fruit: "",
    };
  }
  onChange = (e) => {
    this.setState(
      {
        fruit: e.target.value,
      },
      function () {
        console.log(this.state.name + " selected " + this.state.fruit);
      }
    );
  };
  changeName = (event) => {
    this.setState({ name: event.target.value });
    //console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.state.name}
          onChange={this.changeName}
        />
        <select id="select-input" onChange={this.onChange}>
          <option value="Magellan Barberry">Magellan Barberry</option>
          <option value="Melon">Melon</option>
          <option value="Watermelon">Watermelon</option>
          <option value="Blood orange">Blood orange</option>
        </select>
      </div>
    );
  }
}

export default Exercise2;
