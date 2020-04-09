import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter - constructor");
  }

  componentDidMount() {
    console.log("Counter - component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - component did update");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("props changed from " + prevProps.counter.value);
    }
  }
  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  render() {
    // console.log("props", this.props);
    console.log("Counter - rendered");
    return (
      <React.Fragment>
        <div classname="row">
          <div className="col-2">
            <h4>Counter #{this.props.counter.id}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-2">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>{" "}
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
