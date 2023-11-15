import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Dashboard from './GraficoApi';
import backgroundImage from './imagens/planodefundo.png';

function App() {
  const [exibirCartoes, setExibirCartoes] = useState(false);
  const [dataHora, setDataHora] = useState(new Date());
  const [previsaoTempo, setPrevisaoTempo] = useState('Carregando previsão de tempo...');
  const cidade = 'Londrina';

  const mostrarApenasCartoes = () => {
    setExibirCartoes(true);
  };

  const mostrarApenasHome = () => {
    setExibirCartoes(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDataHora(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const apiKey = 'bd88e1c31482b3af1c282dd4081e1684';
    const unidade = 'metric';

    const traducaoCondicClimaticas = {
      'clear sky': 'Céu Limpo',
      'scattered clouds': 'Nublado',
      'overcast clouds': 'Nublado',
      'few clouds': 'Pred. Nublado',
      'light rain': 'Chuva Leve',
      'light intensity shower rain': 'Raios intensos com chuva',
      'thunderstorm': 'Tempestades',
      'thunderstorm with rain': 'Tempestade com Raios',
      'thunderstorm with light rain': 'Trovoada com Chuva Fraca',
      'Rain': 'Chuva',
      'Snow': 'Neve',
      'Thunderstorm': 'Tempestade',
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=${unidade}`)
      .then((response) => response.json())
      .then((data) => {
        const descricao = data.weather[0].description;
        const traducao = traducaoCondicClimaticas[descricao] || descricao;
        setPrevisaoTempo(`Previsão de Tempo: ${traducao} em ${cidade}`);
      })
      .catch((error) => {
        console.error('Erro ao buscar previsão de tempo:', error);
        setPrevisaoTempo('Erro ao buscar previsão de tempo');
      });
  }, [cidade]);

  return (
    <Container fluid style={{ height: '100%' }}>
      <Row className="nebulous white cabecalho bordacabecalho">
        <Col xs={1} className="d-flex align-items-center">
          <Button variant="primary" onClick={mostrarApenasHome} style={{ width: '100px' }}>
            Início
          </Button>
        </Col>
        <Col xs={1} className="d-flex align-items-center">
          <Button onClick={mostrarApenasCartoes} style={{ width: '100px' }}>
            Gráficos
          </Button>
        </Col>
      </Row>
      <Row className="body">
        <Col
          xs={12}
          className="nebulous white bordaconteudodireita text-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
          }}
        >
          <h3 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', marginLeft: '10px', marginTop: '10px' }}>
            Usipav - Usinagem de Asfalto Ltda
          </h3>

          {exibirCartoes ? (
            <Row className="grafico-container">
              <Col xs={12} className="mx-auto" style={{ marginBottom: '15px', marginLeft: '0' }}>
                <Card className="mb-3" style={{ width: '90%', height: '100%', display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                  <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Card.Title>Gráficos em Linhas - Monitoramento da Usina de Asfalto Usipav</Card.Title>
                    <Card.Text></Card.Text>
                    <div style={{ flex: 1, overflow: 'hidden', height: '120%' }}>
                      <Dashboard />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ) : null}
        </Col>
      </Row>
      <Row className="rodape">
        <Col className="bg-warning bordatempo">{previsaoTempo}</Col>
        <Col xs={5} className="bg-warning bordaDireito">
          Direitos Reservados: Eng2025 Engenharia de Software 
        </Col>
        <Col className="bg-warning bordadatahora">
          Data/Hora: {dataHora.toLocaleString()}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
