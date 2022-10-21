import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  render() {
    return (
      <div>
        <span className={this.getClassess()}>{this.formatCount()}</span>
        <button
          onClick={() => this.increment(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm md-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  increment = (productId) => {
    this.setState({ count: this.state.count + 1 });
  };

  getClassess() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
