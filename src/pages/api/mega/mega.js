import React, { useState } from "react";

export default (props) => {
  function gerarnumeronaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarnumeronaoContido(min, max, array)
      : aleatorio;
  }

  function gerarnumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novonumero = gerarnumeronaoContido(1, 60, nums);
        return [...nums, novonumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarnumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtd de Números</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarnumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarnumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
