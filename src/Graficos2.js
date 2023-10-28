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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Dataset',
        },
    },
};

const labels = ['1', '2', '3', '4', '5', '6', '7'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset vermelho',
            data: labels.map((() => Math.floor(Math.random() * 100))),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'red',
            borderWidth: 1
        },
        {
            label: 'Dataset azul',
            data: labels.map((() => Math.floor(Math.random() * 100))),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'blue',
            borderWidth: 1
        },
    ],
};

const BarChart = () => {
    return <Bar options={options} data={data} />;
}

export default BarChart;