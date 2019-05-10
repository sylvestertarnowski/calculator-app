import React from 'react';

type P = {
    name: string;
    handleClick: (event?: any) => void;
    text: string;
}

const Operation: React.FC<P> = (props) => {
    const { name, handleClick, text } = props;

    return (
        <button
            name={name}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Operation;