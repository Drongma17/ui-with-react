import "./PropDrillingDemo.css";

// - PropDrilling  = DATA EXIST HERE
//   - ComponentA
//     - ComponentB
//       - ThemedComponent   = NEED DATA

function PropDrilling() {
  const theme = "dark";
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h2>PropDrilling (parent-theme) </h2>
      <ComponentA theme={theme} />
    </div>
  );
}

function ComponentA({ theme }) {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h2>ComponentA (child - theme ) </h2>
      <ComponentB theme={theme} />
    </div>
  );
}

function ComponentB({ theme }) {
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>ComponentB (child - theme) </h2>
      <ThemedComponent theme={theme} />
    </div>
  );
}

function ThemedComponent({ theme }) {
  return (
    <div style={{ border: "2px solid orange", padding: "20px" }}>
      <h2>ThemedComponent (child - theme) </h2>
      <div>The current theme is : {theme}</div>;
    </div>
  );
}
export default PropDrilling;
