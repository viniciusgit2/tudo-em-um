import { useState } from "react";
export default function formulario() {
  const [valor, setvalor] = useState("digite");
  function alterar() {
    setvalor(valor + "!");
  }
  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={(e) => setvalor(e.target.value)}
      ></input>
      <button onClick={alterar}>altera</button>
    </div>
  );
}
