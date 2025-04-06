// The useEffect Hook in React lets tou run code
// automatically when something changes or when a
// component loads.

// It's like setting a task to happen after the
// screen updates or when certain data is ready.

// SYNTAX
// useEffect(()=>{
// code to run
// }, [dependency]);

// useEffect(()=>{});  // run on every render
// useEffect(()=>{}, [])  // run only once after the initial render
// useEffect(()=> {}, [count]); // run on initail render and when count changes

import { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(10);
  useEffect(() => {
   console.log(`useEffect Triggered`);
  }, [count]);

  //   const incrementCount = () => {
  //     setCount(count + 1);
  //   };

  return (
    <div>
      <h1>Use Effect Hook</h1>
      {/* <button onClick={incrementCount}>Increment</button> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseEffectHook;
