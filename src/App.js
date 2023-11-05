import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavMenu from './navMenu';
import backgroundImage from './imagens/planodefundo.png';
import Dashboard from './GraficoApi'; // Importe o componente Dashboard

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

  return (
    <Container fluid style={{ height: '100%' }}>
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
