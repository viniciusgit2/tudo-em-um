export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}
export default function estatico(props) {
  return (
    <div>
      <span>aleatorio:{props.numero}</span>
    </div>
  );
}
