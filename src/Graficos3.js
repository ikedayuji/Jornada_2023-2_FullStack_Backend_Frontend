import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
{ name: 'Janeiro', vendas: 4000 },
{ name: 'Fevereiro', vendas: 3000 },
{ name: 'Março', vendas: 2000 },
{ name: 'Abril', vendas: 2780 },
{ name: 'Maio', vendas: 1890 },
{ name: 'Junho', vendas: 2390 },
{ name: 'Julho', vendas: 3490 },
{ name: 'Agosto', vendas: 3000 },
{ name: 'Setembro', vendas: 2000 },
{ name: 'Outubro', vendas: 2780 },
{ name: 'Novembro', vendas: 1890 },
{ name: 'Dezembro', vendas: 2390 },
];


function BarChartComponent() {
return (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="vendas" fill="#8884d8" />
  </BarChart>
);
}


export default BarChartComponent;