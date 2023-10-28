import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavMenu from './navMenu';
import Graficos from './Graficos';
import BarChart from './Graficos2';
import Graficos3 from './Graficos3';
import backgroundImage from './imagens/planodefundo.png';

function App() {
  const [exibirCartoes, setExibirCartoes] = useState(false);
  const [exibirMenu, setExibirMenu] = useState(true);

  const mostrarApenasCartoes = () => {
    setExibirCartoes(true);
    setExibirMenu(false);
  };

  const mostrarApenasHome = () => {
    setExibirCartoes(false);
    setExibirMenu(true);
  };

  const graficosData = [
    { titulo: 'Gráfico 1', conteudo: 'Dados do gráfico 1' },
    { titulo: 'Gráfico 2', conteudo: 'Dados do gráfico 2' },
    { titulo: 'Gráfico 3', conteudo: 'Dados do gráfico 3' },
    { titulo: 'Gráfico 4', conteudo: 'Dados do gráfico 4' },
    { titulo: 'Gráfico 5', conteudo: 'Dados do gráfico 5' },
    { titulo: 'Gráfico 6', conteudo: 'Dados do gráfico 6' }
  ];

  return (
    <Container fluid>
      <Row className="nebulous white cabecalho bordacabecalho">
        <Col xs={1} className="d-flex align-items-center">
          <Button variant="primary" onClick={mostrarApenasHome} style={{ width: '100px' }}>
            Home
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
        <Col xs={3} className={`nebulous white bordamenuacesso mx-auto style ${exibirMenu ? "menu-ativo" : "menu-inativo"}`}>
          <h3>Menu Principal</h3>
          <NavMenu mostrarApenasCartoes={mostrarApenasCartoes} />
        </Col>
        <Col
          xs={9}
          className="nebulous white bordaconteudodireita"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
          }}
        >
          <h3 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Usipav - Usinagem de Asfalto Ltda
          </h3>

          {exibirCartoes ? (
            <Row className="grafico-container">
              {graficosData.map((grafico, index) => (
                <Col xs={4} key={index} style={{ marginBottom: '15px' }}>
                  <Card className="mb-3" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Card.Title>{grafico.titulo}</Card.Title>
                      <Card.Text>{grafico.conteudo}</Card.Text>
                      <div style={{ flex: 1, overflow: 'hidden' }}>
                        {grafico.titulo === 'Gráfico 1' ? (
                          <Graficos />
                        ) : grafico.titulo === 'Gráfico 2' ? (
                          <BarChart />
                        ) : grafico.titulo === 'Gráfico 3' ? (
                          <div style={{ flex: 1, overflow: 'auto' }}>
                            <Graficos3 />
                          </div>
                        ) : (
                          <Graficos />
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : null}
        </Col>
      </Row>
      <Row className="rodape">
        <Col className="bg-warning bordatempo">Previsão de Tempo:</Col>
        <Col xs={5} className="bg-warning bordaDireito">
          Direitos Reservados: UseIA Engenharia de Software
        </Col>
        <Col className="bg-warning bordausuario">Usuário:</Col>
        <Col className="bg-warning bordadatahora">Data/Hora:</Col>
      </Row>
    </Container>
  );
}

export default App;
