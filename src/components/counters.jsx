import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters - constructor");
  }

  componentDidMount() {
    console.log("Counters - component did mount");
  }
  render() {
    console.log("Counters - rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="container">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            ></Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
