import React,{useEffect, useState} from "react";

function Sample() {
    
    let [Count, setCount] = useState(0);
    useEffect(()=>{
        console.log("value Updated");
        return(()=>{
            console.log("code cleanup");
        })
    },[Count])
    return(
        <div>
            <h1>Count:{Count}</h1>
             <button onClick={()=> setCount(Count+1)}>Increment</button>
             <button onClick={()=>setCount(Count-1)}>Decrement
             </button>
        </div>
    )
}
export default Sample;