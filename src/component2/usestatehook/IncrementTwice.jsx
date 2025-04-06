import { useState } from "react";


function IncrementTwice() {


    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const Increase =()=>{
        setCount(count + step)
    }
   const incrementTwice =()=>{
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(prevCount =>prevCount + 1);
    setCount(prevCount => prevCount + 1);
   }

  return (
  <div>
     <h1>Count Value: {count}</h1>
     <input type="number" value={step} onChange={(e)=>setStep(parseInt(e.target.value))} />
   <button onClick={Increase}>Increase</button>
   <button onClick={incrementTwice}>+2</button>
  </div>
  );
}

export default IncrementTwice;