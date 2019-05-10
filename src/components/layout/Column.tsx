import React from 'react';

const Column: React.FC = ({ children }) => {
    return (
        <div className="column">
            {children}
        </div>
    )
}

export default Column;