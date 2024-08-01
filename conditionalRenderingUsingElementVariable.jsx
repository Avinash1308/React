export default function ConditionalComponent() {
  let msgOne = <h1>This is msgOne</h1>;
  let msgTwo = <h1>This is msgTwo</h1>;
  let msg;
  let display = false;
  if (display) {
    msg = msgOne;
  } else {
    msg = msgTwo;
  }
  return msg;
}
