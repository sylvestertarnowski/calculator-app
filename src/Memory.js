import React from "react";
import "./css/Memory.css";

function Memory(props) {
    console.log(props.data.join(" "));
    return (
        <div className="memory">
            {props.data.join(" ")}
        </div>
    )
}

export default Memory;