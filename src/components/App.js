
import React from "react";
import { Component } from "react";


class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  changecontent = (event) => {
    const newvalue = event.target.value;
    this.setState({ value: newvalue });
  }
  render() {
    return (
      <>
        <p>Enter your name:</p>
        <input value={this.state.value} onChange={this.changecontent}  />
        this.state.value ? <p>Hello {this.state.value}!</p> : null
      </>
    )
  }
}

export default Greeting;