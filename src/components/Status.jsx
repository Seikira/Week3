import React from 'react';

const Status = ({ currentPlayer, winner }) => {
    return (
        <div className="status-container">
            {winner ? <h2 className="status">Winner: {winner}!</h2> : <h2 className="status">Next: {currentPlayer}</h2>}
        </div>
    );
};

export default Status;
