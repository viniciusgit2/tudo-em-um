interface Pessoaprops {
  nome: string;
  idade: number;
}
export function Pessoa(props: Pessoaprops) {
  return (
    <div>
      <div>nome{props.nome}</div>
      <div>idade{props.idade}</div>
    </div>
  );
}
