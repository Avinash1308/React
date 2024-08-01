export default function ConditionalComponent() {
  let msg;
  let display = true;
  return display ? <h1>Condition is true</h1> : <h1>condition is false</h1>;
}
