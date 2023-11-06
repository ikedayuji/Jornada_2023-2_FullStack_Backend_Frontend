import React, { useState, useEffect } from 'react';

function TempoApi() {
  const [dadosTempo, setDadosTempo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'bd88e1c31482b3af1c282dd4081e1684';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Londrina,br&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setDadosTempo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao obter os dados da previsão do tempo:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Carregando dados da previsão do tempo...</p>;
  }

  if (!dadosTempo || !dadosTempo.main || !dadosTempo.weather || dadosTempo.weather.length === 0) {
    return <p>Dados da previsão do tempo não disponíveis.</p>;
  }

  return (
    <div>
      <h2>Previsão do Tempo</h2>
      <p>Temperatura atual: {dadosTempo.main.temp}°C</p>
      <p>Condição: {dadosTempo.weather[0].description}</p>
      {/* Você pode adicionar mais informações da previsão do tempo conforme necessário */}
    </div>
  );
}

export default TempoApi;
