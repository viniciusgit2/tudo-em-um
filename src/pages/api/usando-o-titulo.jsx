import Titulo from "../components/Titulo";
export default function titulo() {
  return (
    <div>
      <Titulo
        principal="pagina de cadastro"
        secundario="alterar,excluir,incluir"
      ></Titulo>
      <Titulo
        principal="pagina de login"
        secundario="informe o seu email e senha"
        pequeno={true}
      ></Titulo>
    </div>
  );
}
