import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';

const chartStyle = {
  width: '480px',
  height: '238px',
  margin: '20px',
  border: '1px solid #ccc',
  display: 'inline-block',
};

const cardStyle = {
  ...chartStyle,
};

function GraficoApi() {
  const [chartData, setChartData] = useState({ labels: [], values: [] });
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/grafico-sensor-s04/');
        const data = response.data;

        // Ajuste para pegar apenas os dados necessários
        const dadosSensorS04 = {
          labels: data.labels,
          values: data.values,
        };

        setChartData(dadosSensorS04);
      } catch (error) {
        console.error('Erro ao buscar dados dos gráficos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && chart) {
      // Adapte a lógica conforme necessário para ajustar o tamanho do gráfico
      chart.resize();
    }
  }, [loading, chart]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ReactECharts
          option={{
            title: {
              text: 'Sensor S04',
            },
            tooltip: {
              trigger: 'axis',
            },
            legend: {
              data: ['Sensor S04'],
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: chartData.labels,
            },
            yAxis: {
              type: 'value',
            },
            series: [{
              name: 'Sensor S04',
              type: 'line',
              data: chartData.values,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            }],
          }}
          style={cardStyle}
          onChartReady={(chartInstance) => setChart(chartInstance)}
        />
      )}
    </div>
  );
}

export default GraficoApi;
