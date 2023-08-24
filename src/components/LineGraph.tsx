import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const LineGraph = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const { data } = useQuery<any>(['covid-19/all?lastdays=all'], async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
    return res.data; // Return the 'data' property from the response
  });

  // Check if data is available before rendering
  if (!data) {
    return <div>Loading...</div>;
  }
 
  // Extract cases, deaths, and recovered data
  const casesData = data.cases;
  const deathsData = data.deaths;
  const recoveredData = data.recovered;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'COVID-19 Data Over Time',
      },
    },
  };

  const chartData = {
    labels: Object.keys(casesData),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(casesData),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Deaths',
        data: Object.values(deathsData),
        fill: false,
        borderColor: 'rgba(75, 92, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Recovered',
        data: Object.values(recoveredData),
        fill: false,
        borderColor: 'rgba(175, 92, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return <Line className='chart' data={chartData} options={chartOptions} />;
};

export default LineGraph;
