import { useEffect } from "react";
import { useState } from "react";

export default function Questao() {
  const [questao, setquestao] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((resp) => resp.json())
      .then((questao) => setquestao(questao));
  });
  return (
    <div>
      <h1>Questao</h1>
      <h2>{questao.enunciado}</h2>
      <h3>{questao.respotas}</h3>
    </div>
  );
}
