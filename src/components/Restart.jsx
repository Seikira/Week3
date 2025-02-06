import React from 'react';

const Restart = ({ onRestart }) => {
    return (
        <div className="restart-container">
            <button className="restart" onClick={onRestart}>Restart</button>
        </div>
    );
};

export default Restart;
