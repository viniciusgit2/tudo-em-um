import IF from "../../components/IF";
export default function condicional2(props) {
  const numero = 3;
  return (
    <div>
      {" "}
      <IF teste={numero % 2 === 0}>
        <h1>o numero é par</h1>
      </IF>
      <IF teste={numero % 2 === 1}>
        <h1>o numero é impar</h1>
      </IF>
    </div>
  );
}
