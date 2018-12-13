import React, { Component } from "react";

class CounterComponent extends Component {
  render() {
    return (
      <div>
        <span className={this.handleBadgeClasses()}>{this.handleFormat()}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onHandleInc(this.props.counter)}
          disabled={this.props.counter.value === 10}
        >
          +
        </button>
        <button
          className="btn btn-secondary m-2"
          disabled={!this.props.counter.value}
          onClick={()=>this.props.onHandleDec(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  handleBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  handleFormat() {
    return this.props.counter.value ? this.props.counter.value : "Zero";
  }
}

export default CounterComponent;
