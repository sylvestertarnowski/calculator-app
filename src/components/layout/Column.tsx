import React from 'react';

type P = React.ReactNode;

const Column: React.FC<P> = ({ children }) => {
    return (
        <div className="column">
            {children}
        </div>
    )
}

export default Column;