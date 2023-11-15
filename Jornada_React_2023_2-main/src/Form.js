import React, { useState } from "react";

function Formulario() {
  const [name, setName] = useState(""); // Corrigido o nome da variável e a função
  const [email, setEmail] = useState("");

  function cadastrarFormula(e) {
    e.preventDefault();
    console.log(name); // Use a variável 'name' em vez de uma string 'name'
    console.log('Cadastrou a Formula!');
  }

  return (
    <div>
      <h1>Meu Cadastro:</h1>
      <form onSubmit={cadastrarFormula}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite a Formula"
            value={name} // Use o valor do estado 'name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email} // Use o valor do estado 'email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
