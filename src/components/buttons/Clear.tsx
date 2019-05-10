import React from 'react';

type P = {
    className: string;
    handleClick: () => void;
    text: string;
}

const Clear: React.FC<P> = (props) => {
    const { className, handleClick, text } = props;

    return (
        <button
            className={className}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Clear;