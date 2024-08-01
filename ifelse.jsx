export default function ConditionalComponent() {
  let display = false;
  if (display) {
    return (
      <div>
        <h1>Display is true</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Display is false</h1>
      </div>
    );
  }
}
