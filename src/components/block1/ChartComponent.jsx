import React from 'react';
import { Bar } from 'react-chartjs-2';
import './block1.css'

const ChartComponent = () => {
  const labels = ["Doors", "Fuselage", "Nacelles_Pylons", "Stabilizers", "Windows", "Wings"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Reports',
      data: [1, 4, 0, 6, 2, 5],
      backgroundColor: [
        '#eb290f36',
        '#eb290f36',
        '#eb290f36',
        '#eb290f36',
        '#eb290f36',
        '#eb290f36'
      ],
      borderColor: [
        '#EB280F',
        '#EB280F',
        '#EB280F',
        '#EB280F',
        '#EB280F',
        '#EB280F'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className='chartarea'>
      <h5>Dent & Buckle Reports</h5>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
