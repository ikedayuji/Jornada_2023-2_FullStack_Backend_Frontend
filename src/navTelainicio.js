import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function NavMenu({ mostrarComponente, toggleVisibilidade }) {
  return (
    <>
      <div>
        <Row>
          <Col xs="2">
            <Button
              variant="primary"
              onClick={() => mostrarComponente('cartoes')}
            >
              Home
            </Button>
          </Col>
          <Col xs="2">
            <Button
              variant="primary"
              onClick={() => mostrarComponente('voltar')}
            >
              Voltar
            </Button>
          </Col>
          <Col xs="2">
            <Button
              variant="primary"
              onClick={() => mostrarComponente('telaAtual')}
            >
              Tela Atual
            </Button>
          </Col>
          <Col xs="2">
            <Button
              variant="primary"
              onClick={() => toggleVisibilidade()} // Chama toggleVisibilidade aqui
            >
              Alarmes
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NavMenu;