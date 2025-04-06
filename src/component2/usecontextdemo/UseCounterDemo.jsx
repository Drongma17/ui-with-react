import customHook from "./CustomHook";

function useCounterDemo() {
  const { count, increment, decrement, reset} = customHook(0);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default useCounterDemo;
