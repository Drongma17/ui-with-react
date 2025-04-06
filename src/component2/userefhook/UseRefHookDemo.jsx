


// UseRef
// - persist values across renders
// - Does not cause the component to re-render when the value changes

import { useRef, useState } from "react";
import "./UseRefHook.css";

function UseRefDemo(){
 const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0)
    const incrementStateCount = ()=>{
        setStateCount(stateCount + 1);
    }
    const incrementRefCount =()=>{
        refCount.current +=1;
    }
    return (
        <div>
           <p>State Count : {stateCount}</p>
           <button onClick={incrementStateCount}>Increment State Count</button>
          
           <p>Ref Count : {refCount.current}</p>
           <button onClick={incrementRefCount}>Increment Ref Count</button>
        </div>
    );
}

export default UseRefDemo;