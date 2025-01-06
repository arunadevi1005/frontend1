
import React,{useState} from "react";

function Name(num) {
    let n=14
    let [name, setName] = useState("aruna");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <h1>My name is {name}</h1>
           <h1>My age is:{n+num.a}</h1> 
            
        </div>
    );
}

export default Name; 