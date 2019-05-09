import React, { Component } from 'react';
import "./css/App.css";
import "./css/Operations.css";
import "./css/Numbers.css";
import Display from "./Display";
import Memory from "./Memory";

type State = {
  memory: any[];
  display: string;
  numbers: string[];
  operations: string[];
}

type P = {
  [key: string]: any;
}

class App extends Component<P, State> {

    readonly state = {
      memory: [],
      display: "",
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"],
      operations: ["*", "-", "+", "/"]
    }

  handleClick = (event) => {
    const { name } = event.target;
    this.setState(prevState => {
      return { display: prevState.display + name, }
    })
  }

  handleClear = () => {
    this.setState({
      display: "",
    })
  }

  handleClearAll = () => {
    this.setState({
      memory: [],
      display: "",
    })
  }

  handleBackspace = () => {
    this.setState(prevState => {
      const str = prevState.display;
      const result = str.substring(0, str.length - 1);
      return {
        display: result,
      }
    })
  }

  handleOperation = (event) => {
    let { name } = event.target;
    let { memory, display } = this.state;
    if (display === "" && this.checkIfArrayEndsOnOperator(memory)) {
      this.setState(prevState => {
        let arr = prevState.memory;
        arr[arr.length - 1] = name;
        return {
          memory: arr,
        }
      })
      return;
    }
    this.setState(prevState => {
      let updatedMemory = prevState.memory;
      updatedMemory.push(prevState.display, name);
      return {
        memory: updatedMemory,
        display: "",
      }
    })
  }

  checkIfArrayEndsOnOperator = (arr) => {
    const lastChar = arr[arr.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "/" ||
      lastChar === "*"
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleEquals = () => {
    this.setState(prevState => {
      const { memory, display } = prevState;
      let finalArray = memory;
      if (display.length > 0) {
        finalArray.push(display);
      }
      if (this.checkIfArrayEndsOnOperator(finalArray)) {
        finalArray.pop();
      }
      let finalEquasion = finalArray.join(" ");
      // eslint-disable-next-line
      let result = eval(finalEquasion);
      return {
        memory: [],
        display: result,
      }
    })
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  handleKey = (event) => {
    event.preventDefault();
    const { numbers, operations } = this.state;
    console.log(event.key);
    let key = {
      target: {
        name: event.key,
      }
    };
    if ( numbers.includes(event.key) ) {
      this.handleClick(key);
    }
    if ( operations.includes(event.key) ) {
      this.handleOperation(key);
    }
    if ( event.key === "Backspace" ) {
      this.handleBackspace();
    }
    if ( event.key === "=" || event.key === "Enter" ) {
      this.handleEquals();
    }
    if ( event.key === "Delete" ) {
      this.handleClear();
    }
  }

  render() {
    let nums = this.state.numbers
    return (

      <div className="calculator" tabIndex={-1}>
        <Memory data={this.state.memory} />
        <Display data={this.state.display} />
        <div className="buttons-container">
          <div className="column">
            <div className="clear-container">
              <button
                className="clear"
                onClick={this.handleClear}
              >
                C
              </button>
              <button
                className="clear"
                onClick={this.handleClearAll}
              >
                CA
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
                    tabIndex={0}
                  >
                    {num.toString()}
                  </button>)
              }
              <button
                id="equals"
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
