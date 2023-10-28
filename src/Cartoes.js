import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

function GroupExample() {
  return (
    <div>
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Cadastro de Formula</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>A Produzir</Card.Title>
              <Card.Text>Material a Produzir...</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Produzido</Card.Title>
              <Card.Text>Material Produzido</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Batelada</Card.Title>
              <Card.Text>Batelada...</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Silos</Card.Title>
              <Card.Text>Silos</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Reservado</Card.Title>
              <Card.Text>Reserva</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GroupExample;