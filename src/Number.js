import React, {Component} from "react";
import "./css/Number.css";

class Number extends Component {
    
    render() {
        let numId = this.props.data.toString();
        return (<button
            className="number"
            id={numId}
        >
            {this.props.data}
        </button>)
    }
}

export default Number;