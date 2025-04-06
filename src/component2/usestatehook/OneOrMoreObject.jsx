// You can store arrays, objects, or even more
// complex data structures in state

import { useState } from "react";

function OneOrMoreObject() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);
  const addCouter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  };        

  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };
  return (
    <div>
      <button onClick={addCouter}>Add Counter</button>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            Counter: {counter.id} : {counter.value}
            <button onClick={() => incrementCounter(counter.id)}>
              Increment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OneOrMoreObject;
