export default function Titulo(props) {
  console.log(props);
  if (props.pequeno) {
    <>
      <p>titulo</p>
      <p>subtitulo</p>
    </>;
  }
  return (
    <>
      <h1>titulo</h1>
      <h2>subtitulo</h2>
    </>
  );
}
