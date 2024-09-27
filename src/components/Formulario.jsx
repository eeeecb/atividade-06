import React, { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    genero: "",
    interesses: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let novoInteresses = [...formData.interesses];
      if (checked) {
        novoInteresses.push(value);
      } else {
        novoInteresses = novoInteresses.filter(
          (interesse) => interesse !== value
        );
      }
      setFormData({ ...formData, interesses: novoInteresses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="senha">Senha: </label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="idade">Idade: </label>
        <input
          type="number"
          id="idade"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Gênero: </label>
        <select name="genero" value={formData.genero} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div>
        <label>Interesses:</label>
        <div>
          <input
            type="checkbox"
            id="tecnologia"
            name="interesses"
            value="tecnologia"
            checked={formData.interesses.includes("tecnologia")}
            onChange={handleChange}
          />
          <label htmlFor="tecnologia">Tecnologia</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="esportes"
            name="interesses"
            value="esportes"
            checked={formData.interesses.includes("esportes")}
            onChange={handleChange}
          />
          <label htmlFor="esportes">Esportes</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="musica"
            name="interesses"
            value="musica"
            checked={formData.interesses.includes("musica")}
            onChange={handleChange}
          />
          <label htmlFor="musica">Música</label>
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
