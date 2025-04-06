import { createContext, useContext, useState } from "react";
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

// Context.Provider is used to provide a modified value to the components with its tree.
// This value is only accessible to the components wrapped by the provider

const ThemeContext = createContext("light");

function ContextScope() {
  const [theme, setTheme] = useState("light");
  const toggleThem = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <GlobalComponent />
      <ThemeContext.Provider value={theme}>
        <div style={{ border: "2px solid red", padding: "20px" }}>
          <h2> Parent Theme </h2>
          <button onClick={toggleThem}>Toggle Theme</button>
          <ComponentA />
        </div>
      </ThemeContext.Provider>

      <ThemeContext.Provider value="dark">
        <GlobalComponent />
      </ThemeContext.Provider>
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
      <ThemedComponent />
    </div>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid orange", padding: "20px" }}>
      <h2>ThemedComponent (child - theme) </h2>
      <div>The current theme is : {theme}</div>;
    </div>
  );
}

function GlobalComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid purple", padding: "20px" }}>
      <h2>GlobalComponent (child - theme) </h2>
      <div>The current theme is : {theme}</div>;
    </div>
  );
}
export default ContextScope;
