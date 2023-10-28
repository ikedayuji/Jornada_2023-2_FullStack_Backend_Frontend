import React from 'react';
import { Button } from 'react-bootstrap'; // Importe o componente Button do react-bootstrap

function NavBatelada() {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Produto número: 1
      </Button>
      <Button variant="secondary" size="lg">
        Produto número: 2
      </Button>
      <Button variant="primary" size="lg">
        Produto número: 3
      </Button>
      <Button variant="secondary" size="lg">
        Produto número: 4
      </Button>
    </div>
  );
}

export default NavBatelada;
