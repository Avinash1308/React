import "../Css/Style.css";
export default function InlineComponent() {
  return (
    <div>
      <h1 className="header">Welcome to InlineComponent</h1>
    </div>
  );
}


// css code in Style.css
.header {
  color: rgb(248, 247, 250);
  background-color: yellow;
  font-size: 40 pxl;
}
