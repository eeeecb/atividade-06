import React from "react";

function ListaFrutas() {
  const frutas = [
    { id: 1, fruta: "Maçã", preco: 10 },
    { id: 2, fruta: "Banana", preco: 5 },
    { id: 3, fruta: "Laranja", preco: 8 },
    { id: 4, fruta: "Morango", preco: 15 },
    { id: 5, fruta: "Uva", preco: 6 },
  ];

  return (
    <>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta.id}>{fruta.fruta} | Preço: R$ {fruta.preco},00</li>
        ))}
      </ul>
    </>
  );
}

export default ListaFrutas;
