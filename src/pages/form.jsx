import { useState } from "react";

export default function form() {
  function salvarusuario() {
    fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ nome, idade }),
    });
  }
  const [nome, setnome] = useState("");
  const [idade, setidade] = useState(0);

  return (
    <div>
      <h1>integrando com api</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setnome(e.target.value)}
      ></input>
      <input
        type="number"
        value={idade}
        onChange={(e) => setidade(+e.target.value)}
      ></input>
      <button onClick={salvarusuario}>enviar</button>
    </div>
  );
}
