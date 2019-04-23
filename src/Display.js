import React from "react";
import "./css/Display.css";

function Display(props) {
    return (
        <div className="display">{props.data}</div>
    )
}

export default Display;