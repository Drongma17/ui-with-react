// Custom Hook in React are functions
// that let you reuse logic across multiple components.
// custom hook created by using start with "use" use****,  ex useMyPhone

import { useState } from "react";

function customHook(initialValue = 0) {
  const [count, setCount] = useState(0);
  const reset =()=> setCount(initialValue)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement, reset };
}

export default customHook;
