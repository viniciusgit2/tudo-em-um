import lista from "../../data/lista";
import produto from "../../model/produto";
export default function repeticacao2() {
  function renderizarlinhas() {
    return lista.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderizarlinhas()}</tbody>
      </table>
    </div>
  );
}
