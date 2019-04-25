import React, { Component } from 'react';
import "./css/App.css";
import Display from "./Display";
import Memory from "./Memory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memory: [],
      display: "",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."]
    }

    this.handleClick = this.handleClick.bind(this); //clicking on any number or dot
    this.handleClear = this.handleClear.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "/": (x, y) => x / y,
    "*": (x, y) => x * y
  }

  handleClick(event) {
    const { name } = event.target;
    this.setState(prevState => {
      return { display: prevState.display + name, }
    })
  }

  handleClear() {
    this.setState({
      display: "",
    })
  }

  handleClearAll() {
    this.setState({
      memory: [],
      display: "",
    })
  }

  handleBackspace() {
    this.setState(prevState => {
      const str = prevState.display;
      const result = str.substring(0, str.length - 1);
      return {
        display: result,
      }
    })
  }

  handleOperation(event) {
    let { name } = event.target;
    this.setState(prevState => {
      let updatedMemory = prevState.memory;
      updatedMemory.push(prevState.display, name);
      console.log(updatedMemory);
      return {
        memory: updatedMemory,
        display: "",
      }
    })
  }

  checkIfArrayEndsOnOperator(arr) {

  }

  handleEquals() {
    this.setState(prevState => {
      let finalArray = prevState.memory;
      finalArray.push(prevState.display);
      // if(finalArray[finalArray.length - 1] )
      let finalEquasion = finalArray.join(" ");
      let result = eval(finalEquasion);
      return {
        memory: [],
        display: result,
      }
    })
  }

  render() {
    let nums = this.state.numbers
    return (
      <div className="calculator">
        <Memory data={this.state.memory} />
        <Display data={this.state.display} />
        <div className="buttons-container">
          <div className="column">
            <div className="clear-container">
              <button
                className="clear"
                onClick={this.handleClear}
              >
                Clear
              </button>
              <button
                className="clear"
                onClick={this.handleClearAll}
              >
                Clear All
              </button>
            </div>
            <div className="numpad-container">
              {
                nums.map(num =>
                  <button
                    name={num.toString()}
                    key={num}
                    className="number"
                    id={num.toString()}
                    onClick={this.handleClick}
                  >
                    {num.toString()}
                  </button>)
              }
                <button
                  name="equals"
                  onClick={this.handleEquals}
                >
                  =
                </button>
            </div>
          </div>
          <div className="column">
          {/* Operations here*/}
              <div className="operations-container">
                <button
                  name="backspace"
                  onClick={this.handleBackspace}
                >
                  {"<--"}
                </button>

                <button
                  name="+"
                  onClick={this.handleOperation}
                >
                  +
                </button>

                <button
                  name="-"
                  onClick={this.handleOperation}
                >
                  -
                </button>

                <button
                  name="/"
                  onClick={this.handleOperation}
                >
                  /
                </button>

                <button
                  name="*"
                  onClick={this.handleOperation}
                >
                  *
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
