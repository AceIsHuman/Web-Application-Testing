import React from 'react';

const Display = props => {
  return (
    <div>
      <div>
        <h2>Strike: </h2>
        <p>{props.strikes}</p>
      </div>

      <div>
        <h2>Ball: </h2>
        <p>{props.balls}</p>
      </div>
    </div>
  );
}

export default Display;