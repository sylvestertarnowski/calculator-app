import React, { Component } from 'react';
import "./css/App.css";
import Display from "./Display";
// import Number from "./Number";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memory: "",
      display: "",
      operation: "",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."]
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
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
      memory: "",
      display: "",
    })
  }

  render() {
    let nums = this.state.numbers
    return (
      <div className="calculator">
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
            </div>
          </div>
          <div className="column">
              <div className="operations-container">
                <button
                  name="backspace"
                  onClick={this.handleBackspace}
                >
                {"<--"}
                </button>
                <button
                  name="plus"
                  onClick={this.handlePlus}
                >
                +
                </button>
                <button
                  name="minus"
                  onClick={this.handleMinus}
                >
                -
                </button>
                <button
                  name="divide"
                  onClick={this.handleDivide}
                >
                /
                </button>
                <button
                  name="multiply"
                  onClick={this.handleMultiply}
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
