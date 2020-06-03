import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const HomePage: React.FC<{}> = () => {
  const [chartProps] = useState({
    series: [
      {
        name: 'Råning',
        data: [12, 42, 24, 32, 76, 104, 55],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        curve: 'smooth',
        colors: ['#6d9c99'],
      },
      colors: ['#6d9c99'],
      title: {
        text: 'Antall skrens per døgn',
        align: 'left',
      },
      xaxis: {
        type: 'category',
        categories: [
          'Mandag',
          'Tirsdag',
          'Onsdag',
          'Torsdag',
          'Fredag',
          'Lørdag',
          'Søndag',
        ],
      },
    },
  });

  return (
    <section>
      <h2 className="mb-4">Home</h2>
      <Chart
        options={chartProps.options}
        series={chartProps.series}
        type="line"
        height={350}
      />
    </section>
  );
};

export default HomePage;
