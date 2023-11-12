import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';

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
  const chartRef = useRef(React.createRef());
  const [chartData, setChartData] = useState({ labels: [], values: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/chart/data/');
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
    if (!loading) {
      const myChart = echarts.init(chartRef.current);

      const option = {
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
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose();
      };
    }
  }, [chartData, loading]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div ref={chartRef} style={cardStyle} />
      )}
    </div>
  );
}

export default GraficoApi;
  