import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function Grafico() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Moegas', 'Secador de Agregados', 'Sistema de Pesagem', 'Misturador', 'Silo de Armazenamento', 'Sistema de Alimentação de Asfalto', 'Sistema de Abastecimento de Combustível', 'Sistema de Aditivos', 'Elevador', 'Esteira', 'Silo de Armazenamento de Mistura'],
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
        data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Moegas',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Secador de Agregados',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Sistema de Pesagem',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Misturador',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Silo de Armazenamento de Mistura',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
        {
          name: 'Sistema de Alimentação de Asfalto',
          type: 'line',
          stack: 'Total',
          data: [850, 232, 601, 534, 990, 1430, 820],
        },
        {
          name: 'Sistema de Abastecimento de Combustível',
          type: 'line',
          stack: 'Total',
          data: [120, 832, 401, 234, 550, 730, 1120],
        },
        {
          name: 'Sistema de Aditivos',
          type: 'line',
          stack: 'Total',
          data: [600, 732, 621, 544, 690, 730, 920],
        },
        {
          name: 'Elevador',
          type: 'line',
          stack: 'Total',
          data: [620, 222, 561, 824, 690, 930, 424],
        },
        {
          name: 'Esteira',
          type: 'line',
          stack: 'Total',
          data: [659, 888, 1561, 259, 900, 1430, 420],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ height: '500px' }} />;
}

export default Grafico;
