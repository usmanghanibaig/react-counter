import React, { Component } from "react";
// import CounterComponent from "./components/counterComponent.jsx";
import CountersComponent from "./components/countersComponent";
import Nav from "./components/navBar";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleInc = count => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(count);
    counter[index] = { ...count };
    counter[index].value++;

    this.setState({ counter });
  };
  handleDec = counters => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(counters);
    counter[index] = { ...counters };
    counter[index].value--;
    this.setState({ counter });
  };
  handleReset = () => {
    const counter = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counter });
  };
  handleDelete = counterId => {
    const counter = this.state.counter.filter(del => del.id !== counterId);

    const stickCounter = this.state.counter.filter(del => del.id === counterId);
    if (this.state.counter.length === 1) {
      const r = window.confirm("Do you really want your cart to be empty");
      return r === true
        ? this.setState({ counter })
        : this.setState({
            counter: stickCounter
          });
    }
    this.setState({ counter });
  };

  handleAdd = counterId => {
    const add = [...this.state.counter];
    // const id = Math.max.apply(
    //   Math,
    //   add.map(function(o) {
    //     return o.id;
    //   })
    // );

    const plus = add.map(c => c.id);

    const max = Math.max(...plus);

    if (add.length < 1) {
      add.push({ id: 1, value: 0 });
    } else if (add.length < 8) {
      add.push({ id: max + 1, value: 0 });
    }

    this.setState({ counter: add });
  };
  render() {
    return (
      <React.Fragment>
        <Nav value={this.state.counter.filter(c => c.value > 0).length} />
        <main className="container ">
          <CountersComponent
            counter={this.state.counter}
            onHandleDelete={this.handleDelete}
            onHandleReset={this.handleReset}
            onHandleInc={this.handleInc}
            onHandleDec={this.handleDec}
            onHandleAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
