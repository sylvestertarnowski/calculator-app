import React, {Component} from 'react';
import "./css/App.css";
import Display from "./Display";
// import Number from "./Number";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memory: "",
      display: "",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(event) {
    const {name} = event.target;
    this.setState(prevState => {
      return {display: prevState.display + name,}
    })
  }

  handleClear() {
    this.setState({
      display: "",
    })
  }

  render() {
    let nums = this.state.numbers
    return (
      <div className="calculator">
        <Display data={this.state.display}/>
        <button
          className="clear"
          onClick={this.handleClear}
        >
          Clear
        </button>
        <div className="buttons-container">
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
    )
  }
}

export default App;
