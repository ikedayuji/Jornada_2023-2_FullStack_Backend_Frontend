import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';

const chartStyle = {
  width: '480px',
  height: '238px',
  margin: '10px', // Espaçamento entre os gráficos
  border: '1px solid #ccc',
  display: 'inline-block',
};

const cardStyle = {
  ...chartStyle,
};

function GraficoApi() {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [chartsTopRow, setChartsTopRow] = useState([]);
  const [chartsBottomRow, setChartsBottomRow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/grafico-sensores/');
        const data = response.data;

        // Define os dados para cada sensor
        setChartData(data);
      } catch (error) {
        console.error('Erro ao buscar dados dos gráficos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && Object.keys(chartData).length > 0) {
      // Organiza os gráficos na primeira e segunda linha
      const topRowCharts = Object.keys(chartData).slice(0, 3).map(sensor => (
        <ReactECharts
          key={sensor}
          option={{
            title: {
              text: `Sensor ${sensor}`,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: chartData[sensor].labels,
            },
            yAxis: {
              type: 'value',
            },
            tooltip: {
              trigger: 'axis',
              formatter: (params) => {
                const { name, value } = params[0];
                return `Data: ${name}<br />Valor: ${value}`;
              },
            },
            dataZoom: [{ type: 'inside' }], // Ativa a funcionalidade de zoom com o mouse
            series: [{
              name: `Sensor ${sensor}`,
              type: 'line',
              data: chartData[sensor].values,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            }],
          }}
          style={cardStyle}
        />
      ));

      const bottomRowCharts = Object.keys(chartData).slice(3).map(sensor => (
        <ReactECharts
          key={sensor}
          option={{
            title: {
              text: `Sensor ${sensor}`,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: chartData[sensor].labels,
            },
            yAxis: {
              type: 'value',
            },
            tooltip: {
              trigger: 'axis',
              formatter: (params) => {
                const { name, value } = params[0];
                return `Data: ${name}<br />Valor: ${value}`;
              },
            },
            dataZoom: [{ type: 'inside' }], // Ativa a funcionalidade de zoom com o mouse
            series: [{
              name: `Sensor ${sensor}`,
              type: 'line',
              data: chartData[sensor].values,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            }],
          }}
          style={cardStyle}
        />
      ));

      setChartsTopRow(topRowCharts);
      setChartsBottomRow(bottomRowCharts);
    }
  }, [loading, chartData]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {chartsTopRow}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {chartsBottomRow}
          </div>
        </div>
      )}
    </div>
  );
}

export default GraficoApi;
