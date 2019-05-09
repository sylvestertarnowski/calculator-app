import React from "react";
import "../css/Memory.css";

type P = {
    data: any[];
}

const Memory: React.FC<P> = (props) => {
    return (
        <div className="memory">
            {props.data.join(" ")}
        </div>
    )
}

export default Memory;