export default function IF(props) {
  if (props.teste) {
    return props.children;
  } else {
    return null;
  }
}
