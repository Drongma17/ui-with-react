import { useState } from "react";

function UseState1(){
    const [count, setCount] = useState(0); 
      const [step, setStep] = useState(1);
      // const Increment =()=>{
      //   setCount(count+1)
      // }
      const Increment =()=>{
        setCount(count +step)
      }
     
      return (
        <div className="app-container">
          <h1>Count Value: {count}</h1>
          <input type="number" value={step} onChange={(e)=>setStep(parseInt(e.target.value))}/>
          <button onClick={Increment}>Increment</button>
          {/* <button  onClick={()=>setCount(count-1)}>Decrement</button> */}
          <button onClick={()=>setCount(count - step)}>Decrement</button>
    
        </div>
      );
}

export default UseState1;