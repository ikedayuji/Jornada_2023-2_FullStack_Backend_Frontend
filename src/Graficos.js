//import React from 'react';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//import api from './config/api';


//const Grafico = () => {
//  const data = [
//    { name: 'Janeiro', Vendas: 65 },
//    { name: 'Fevereiro', Vendas: 59 },
//    { name: 'Março', Vendas: 80 },
//    { name: 'Abril', Vendas: 81 },
//    { name: 'Maio', Vendas: 56 },
//  ];

//api.get("/").then((response)=>{
//  console.log(response.data);
//})


//  return (
//    <div>
//      <h2>Gráfico de Teste</h2>
//      <ResponsiveContainer width="100%" height={300}>
//        <LineChart data={data}>
//          <CartesianGrid strokeDasharray="3 3" />
//          <XAxis dataKey="name" />
//          <YAxis />
//          <Tooltip />
//          <Line type="monotone" dataKey="Vendas" stroke="rgba(75, 192, 192, 1)" />
//        </LineChart>
//      </ResponsiveContainer>
//    </div>
//  );
//};

//export default Grafico;
