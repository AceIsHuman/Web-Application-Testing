import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.addBall}>Add Ball</button>
      <button onClick={props.addStrike}>Add Strike</button>
      <button onClick={props.foulBall}>Foul Ball</button>
      <button onClick={props.clearBoard}>Record Hit</button>
    </div>
  );
}

export default Dashboard;