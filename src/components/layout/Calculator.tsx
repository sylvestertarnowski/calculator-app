import React from 'react';

const Calculator: React.FC = ({ children }) => {
    return (
        <div
            className="calculator"
            tabIndex={-1}
        >
            {children}
        </div>
    )
}

export default Calculator;