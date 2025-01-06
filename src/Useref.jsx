import React,{useRef, useState} from "react";

function Useref() {
    
    //let [Count, setCount] = useState(0);
    let countRef=useRef(0)
    let [name,setName]= useState(" ");

    let change=(event)=>{
        setName(event.target.value);
        countRef.current++;
        console.log("name:",event.target.value);
        console.log("countRef:",countRef.current);
    }
    
    return(
        <div>
            <input type="text" value={name} onChange={change} />
            <h1>My name is {name}</h1>
             
        </div>
    )
}
export default Useref;