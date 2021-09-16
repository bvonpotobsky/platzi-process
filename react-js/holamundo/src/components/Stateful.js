import React, { Component } from "react";

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hola mundo soy un componente Stateful",
    };
  }
  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Stateful;
