import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display:false,
    },
  },
  scales: {
    y:{
      min: 0,
      max: 2000,
      ticks: {
        stepSize: 500,
        
      },
    },
  },
  layout: {
    padding: {
        left: 100,
        right:50,
        top:80,
    }
  }
};

const labels = ['1', '2', '3', '4', '5'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1500 })),
      backgroundColor: 'rgba(26, 61, 125)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1500 })),
      backgroundColor: 'rgba(52, 123, 248)',
    },
  ],
};
export default function Graphics(){
    return(
        <section className="border rounded-xl ">
          <div className='h-96'>
            <Bar options={options} data={data} />;
          </div>
        </section>
    )
}