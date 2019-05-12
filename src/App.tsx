import React, { Component } from 'react';
import "./css/App.css";
import "./css/Operations.css";
import "./css/Numbers.css";
import Display from "./components/Display";
import Memory from "./components/Memory";
import Calculator from './components/layout/Calculator';
import Column from './components/layout/Column';
import Clear from './components/buttons/Clear';
import Operation from './components/buttons/Operation';

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
      operations: ["+", "-", "*" , "/"]
    }

  handleClick = (event: any) => {
    const { name } = event.target;
    if(name === "." && this.checkEdgeCasesForDot(name)) {
      return;
    }
    if(this.checkEdgeCasesForZero()){
      if(name === ".") {
        this.setState(prevState => {
          return { display: prevState.display + name }
        });
        return;
      } else {
        this.setState(() => {
          return { display: name }
        })
        return;
      }
    }
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

  handleOperation = (event: any) => {
    let { name } = event.target;
    let { memory, display } = this.state;
    if (name !== "-" && memory.length === 0 && display.length === 0) {
      console.log('prevented crash in the future');
      return;
    }
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

  checkIfArrayEndsOnOperator = (arr: string[]): boolean => {
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

  checkEdgeCasesForZero = ():boolean => {
    const { display } = this.state;

    if(display === "0") {
      return true;
    } else {
      return false;
    }
  }

  checkEdgeCasesForDot = (key: string):boolean => {
    const { display } = this.state;

    if(display === "" && key === ".") {
      return true;
    } else if (display.includes('.')){
      return true;
    } else {
      return false;
    }
  }

  checkEdgeCases = ():boolean => {
    const { display, memory } = this.state;
    if (display.length === 0 && memory.length === 0) {
      return true;
    } else if (memory[1] === "-" && memory.length === 2) {
      return true;
    } else {
      return false;
    }
  }

  handleEquals = () => {
    if (this.checkEdgeCases()) {
      console.log('prevented crash!');
      return;
    }
    this.setState(prevState => {
      const { memory, display } = prevState;
      let finalArray: string[] = memory;
      if (display.length > 0) {
        finalArray.push(display);
      };
      if (this.checkIfArrayEndsOnOperator(finalArray)) {
        finalArray.pop();
      };
      let finalEquasion = finalArray.join(" ");
      // eslint-disable-next-line
      let result = eval(finalEquasion);
      let resultStr = result.toString();
      return {
        memory: [],
        display: resultStr,
      };
    });
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  handleKey = (event: any) => {
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
    let operations = this.state.operations;
    return (

      <Calculator>
        <Memory data={this.state.memory} />
        <Display data={this.state.display} />
        <div className="buttons-container">
          <Column>
            <div className="clear-container">
              <Clear
                className="clear"
                handleClick={this.handleClear}
                text="C"
              />
              <Clear
                className="clear"
                handleClick={this.handleClearAll}
                text="CA"
              />
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
              <Operation
                id="equals"
                name="equals"
                handleClick={this.handleEquals}
                text="="
              />
            </div>
          </Column>
          <Column>
            <div className="operations-container">
              <Operation
                name="backspace"
                handleClick={this.handleBackspace}
                text="<--"
              />
              {
                operations.map(operation =>
                    <Operation
                      key={operation}
                      name={operation}
                      handleClick={this.handleOperation}
                      text={operation}
                    />)
              }
            </div>
          </Column>
        </div>
      </Calculator>
    )
  }
}

export default App;
