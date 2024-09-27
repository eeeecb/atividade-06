import React from 'react';

function ListaProdutos() {
  const produtos = [
    { id: 1, nome: 'Laptop', preco: 1200, estoque: 10 },
    { id: 2, nome: 'Smartphone', preco: 800, estoque: 15 },
    { id: 3, nome: 'Fones de ouvido', preco: 100, estoque: 20 },
    { id: 4, nome: 'Teclado', preco: 50, estoque: 30 },
    { id: 5, nome: 'Mouse', preco: 30, estoque: 40 },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco},00</td>
              <td>{produto.estoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProdutos;