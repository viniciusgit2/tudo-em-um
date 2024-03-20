import Lista from "../components/Lista";
import Item from "../components/Item";
export default function Componentecomfilho() {
  return (
    <div>
      <Lista>
        <Item conteudo="conteudo 1" /> <Item conteudo="conteudo 2" />{" "}
        <Item conteudo="conteudo 3" />
      </Lista>{" "}
    </div>
  );
}
