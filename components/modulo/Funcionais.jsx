export default function Funcionais() {
  return (
    <div>
      <Comp1></Comp1>
      {Comp2}
    </div>
  );
}
function Comp1() {
  return <h2>comp1</h2>;
}
const Comp2 = function () {
  return <h1>Comp2</h1>;
};
