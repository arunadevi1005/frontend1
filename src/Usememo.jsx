
import { useState,useMemo } from "react";

function Usememo(){
    let[dark,setDark]=useState(false);
    let[number,setNumber]=useState(0);

    let doubleNum=useMemo(()=>{
        return slowFunction(number);
    },[number])

    let themestyle=useMemo(()=>{
        return {
            backgroundColor:'dark' ?'black': 'white',
            color:'dark'?'white':'black'
        }
    },[dark])

    useEffect(()=>{
        console.log("theme changed");

    },[themestyle])

    return(
        <div>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>setDark((value)=>!value)}>Change Theme</button>
            <div style={themestyle}>{doubleNum}</div>
        </div>
    )
}

function slowFunction(num){
    for(let i=0;i<10000000000000;i++){
        doubleNum=num*2;
    }
}
export default Usememo;