export default function InlineComponent() {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          background: "yellow",
          bordercolor: "red",
          border: "2px solid black",
        }}
      >
        Welcome to InlineComponent
      </h1>
    </div>
  );
}





//another way


const header = {
  color: "red",
  background: "yellow",
  bordercolor: "red",
  border: "2px solid black",
};
export default function InlineComponent() {
  return (
    <div>
      <h1 style={header}>Welcome to InlineComponent</h1>
    </div>
  );
}
