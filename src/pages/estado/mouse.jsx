export default function mouse() {
  const stilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    height: "100vh",
    flexDirection: "column",
  };
  function mvmouse(ev) {
    console.log(ev);
  }
  return (
    <div style={stilo} onMouseMove={mvmouse}>
      <h1>x</h1>
      <h2>y</h2>
    </div>
  );
}
