import React from 'react';
import ListaCarros from './components/ListaCarros';
import ListaFrutas from './components/ListaFrutas';
import ListaProdutos from './components/ListaProdutos'
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <h2>Lista de Carros</h2>
      <ListaCarros />
      <br />
      <h2>Lista de Frutas</h2>
      <ListaFrutas />
      <br />
      <h2>Lista de Produtos</h2>
      <ListaProdutos />
      <h2>Formulario de Cadastro</h2>
      <Formulario />
    </div>
  );
}

export default App;