import { createContext, useContext } from "react";
import "./PropDrillingDemo.css";

// - PropDrilling  = DATA EXIST HERE
//   - ComponentA
//     - ComponentB
//       - ThemedComponent   = NEED DATA


// useContext()

// create a context:
// const MyContext = createContext(defaultValue)

// Consume the context
// const contextValue = useContext(MyContext)


const ThemeContext = createContext('light');

function UseContextDemo() {

  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h2>UseContextDemo (parent-theme) </h2>
      <ComponentA/>
    </div>
  );
}

function ComponentA() {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h2>ComponentA (child - theme ) </h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>ComponentB (child - theme) </h2>
      <ThemedComponent  />
    </div>
  );
}

function ThemedComponent() {
    const theme = useContext(ThemeContext)
  return (
    <div style={{ border: "2px solid orange", padding: "20px" }}>
      <h2>ThemedComponent (child - theme) </h2>
      <div>The current theme is : {theme}</div>;
    </div>
  );
}
export default UseContextDemo;
