import React, { useState, useEffect } from 'react';
import './App.css'; // Importa estilos CSS (se necessário)
import { Container, Row, Col, Button, Card } from 'react-bootstrap'; // Importa componentes do React Bootstrap
import NavMenu from './navMenu'; // Importa o componente NavMenu (certifique-se de que o caminho do arquivo está correto)
import Dashboard from './GraficoApi'; // Importa o componente Dashboard (certifique-se de que o caminho do arquivo está correto)
import backgroundImage from './imagens/planodefundo.png'; // Importa a imagem de plano de fundo (certifique-se de que o caminho do arquivo está correto)

function App() {
  const [exibirCartoes, setExibirCartoes] = useState(false); // Define um estado para controlar se os cartões são exibidos
  const [dataHora, setDataHora] = useState(new Date()); // Define um estado para armazenar a data e hora
  const [previsaoTempo, setPrevisaoTempo] = useState('Carregando previsão de tempo...'); // Define um estado para exibir a previsão do tempo
  const cidade = 'Londrina'; // Defina a cidade desejada aqui

  const mostrarApenasCartoes = () => {
    setExibirCartoes(true); // Função para mostrar apenas os cartões
  };

  const mostrarApenasHome = () => {
    setExibirCartoes(false); // Função para mostrar a tela inicial
  };

  useEffect(() => {
    // Atualiza a data e hora a cada segundo
    const interval = setInterval(() => {
      setDataHora(new Date());
    }, 1000);

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  useEffect(() => {
    const apiKey = 'bd88e1c31482b3af1c282dd4081e1684';
    const unidade = 'metric';

    // Mapeamento das condições climáticas em inglês para português
    const traducaoCondicClimaticas = {
      'Clear': 'Céu Limpo',
      'Clouds': 'Nublado',
      'Rain': 'Chuva',
      'Snow': 'Neve',
      'Thunderstorm': 'Tempestade',
      // Adicione mais condições climáticas conforme necessário
    };

    // Recupere a previsão do tempo para a cidade desejada
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
          <Button variant="primary" style={{ width: '100px' }}>
            Voltar
          </Button>
        </Col>
        <Col xs={1} className="d-flex align-items-center">
          <Button variant="primary" style={{ width: '100px' }}>
            Tela Atual
          </Button>
        </Col>
        <Col xs={1} className="d-flex align-items-center">
          <Button onClick={mostrarApenasCartoes} style={{ width: '100px' }}>
            Gráficos
          </Button>
        </Col>
        <Col xs={1} className="d-flex align-items-center">
          <Button variant="primary" style={{ width: '100px' }}>
            Alarmes
          </Button>
        </Col>
      </Row>
      <Row className="body">
        <Col xs={3} className={`nebulous white bordamenuacesso mx-auto style ${exibirCartoes ? "menu-ativo" : "menu-inativo"}`}>
          <h3>Menu Principal</h3>
          <NavMenu mostrarApenasCartoes={mostrarApenasCartoes} />
        </Col>
        <Col
          xs={9}
          className="nebulous white bordaconteudodireita"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Define a imagem de plano de fundo
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
          }}
        >
          <h3 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Usipav - Usinagem de Asfalto Ltda
          </h3>

          {exibirCartoes ? (
            <Row className="grafico-container">
              <Col xs={9} style={{ marginBottom: '15px', marginLeft: '12%' }}>
                <Card className="mb-3 ml-auto" style={{ transform: 'scaleX(1.2)', height: '105%', display: 'flex', flexDirection: 'column' }}>
                  <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Card.Title>Gráfico de Linhas</Card.Title>
                    <Card.Text>Dados do Gráfico de Linhas</Card.Text>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
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
          Direitos Reservados: UseIA Engenharia de Software
        </Col>
        <Col className="bg-warning bordausuario">Usuário:</Col>
        <Col className="bg-warning bordadatahora">
          Data/Hora: {dataHora.toLocaleString()}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
