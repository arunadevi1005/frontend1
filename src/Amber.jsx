import { createContext, useState } from 'react';
import Hen from './Hen';
//import './Color.css';
import Stomach from './Stomach';

export let nameContext = createContext();

function Amber() {
    let [color, setColor] = useState("black");
    let[bgColor,setBgcolor]=useState("");
    const handleColorChange = () => {
        setColor((color === "pink" ? "black" : "pink"))
        setBgcolor((bgColor=== "black" ? "pink" : "black"))
    }
    
    return (
        <nameContext.Provider value={{color,bgColor}}>
            <button onClick={handleColorChange} id="color">Change Color</button>
            <div style={{ color: color }}>
            <Stomach textColor={color} bgColor={bgColor}/>
            </div>
        </nameContext.Provider>
    );
}

export default Amber;