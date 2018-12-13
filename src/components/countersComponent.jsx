import React, { Component } from "react";
import CounterComponent from "./counterComponent";

class CountersComponent extends Component {
  render() {
    return (
      <div>
        {this.props.counter.length === 0 ? (
          <div>
            <h6 className="p-2 btn btn-danger m-2">
              You'r bucket is empty.Kindly add some items.
            </h6>
            <br />
            
            <button
              className="btn btn-secondary m-2"
              onClick={() => this.props.onHandleAdd(this.props.counter.id)}
            >
              Add
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-primary m-2"
              onClick={this.props.onHandleReset}
            >
              Reset
            </button>
            {this.props.counter.map(count => (
              <CounterComponent
                key={count.id}
                counter={count}
                onDelete={this.props.onHandleDelete}
                onHandleInc={this.props.onHandleInc}
                onHandleDec={this.props.onHandleDec}
              />
            ))}
            <button
              className="btn btn-secondary m-2"
              onClick={() => this.props.onHandleAdd(this.props.counter.id)}
            >
              Add
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default CountersComponent;
