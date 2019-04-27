import React from "react";
import "./css/Memory.css";

function Memory(props) {
    return (
        <div className="memory">
            {props.data.join(" ")}
        </div>
    )
}

export default Memory;