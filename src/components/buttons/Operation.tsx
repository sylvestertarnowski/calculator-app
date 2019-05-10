import React from 'react';

type P = {
    id?: string;
    name: string;
    handleClick: (event?: any) => void;
    text: string;
}

const Operation: React.FC<P> = (props) => {
    const { id, name, handleClick, text } = props;

    return (
        <button
            id={id}
            name={name}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Operation;