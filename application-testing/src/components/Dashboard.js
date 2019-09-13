import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.addBall}>Ball</button>
      <button onClick={props.addStrike}>Strike</button>
      <button onClick={props.foulBall}>Foul</button>
      <button onClick={props.clearBoard}>Hit</button>
    </div>
  );
}

export default Dashboard;