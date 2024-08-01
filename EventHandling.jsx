export default function Message() {
  function buttonClick() {
    alert("Button clicked");
  }
  return (
    <div>
      <button onClick={buttonClick}>Click Me</button>
    </div>
  );
}
