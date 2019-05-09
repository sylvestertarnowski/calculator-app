import React from "react";
import "../css/Display.css";

type P = {
    data: string;
}

const Display: React.FC<P> = (props) => {
    return (
        <div className="display">{props.data}</div>
    )
}

export default Display;