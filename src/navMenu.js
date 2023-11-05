import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Row, Col, Margen } from 'react-bootstrap';
import Silos from './Silo';


function NavMenu() {
  return (
    <>
      <Row>
        <Col xs="3">
          <Button style={{width: 290, display:"block", borderBlockColor: 'Black' }} variant="primary" size="lg" className='m-2'>
          Cadastro
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button style={{width: 290, display:"block", borderBlockColor: 'Black' }} variant="primary" size="lg" className='m-2'>
          A Produzir
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button style={{width: 290, display:"block", borderBlockColor: 'Black' }} variant="primary" size="lg" className='m-2'>
          Produzido
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button style={{width: 290, display:"block", borderBlockColor: 'Black' }} variant="primary" size="lg" className='m-2'>
          Batelada
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button style={{width: 290, display:"block", borderBlockColor: 'Black' }} variant="primary" size="lg" className='m-2'>
          Silos
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button style={{width: 290, display:"block", borderBlockColor: 'Black' }} variant="primary" size="lg" className='m-2'>
          Sair
          </Button>
        </Col>
      </Row>
      </>
  );
}

export default NavMenu;