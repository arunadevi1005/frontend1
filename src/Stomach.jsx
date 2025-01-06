import React, {useContext} from 'react';
import {nameContext} from './Amber.jsx'
import './Color.css';
const Stomach=()=>{
    let {color,bgColor}=useContext(nameContext);
    return(
        <div>
            <h1 style={{color:color,backgroundColor:bgColor}} >
                Stomach needs cold water
            </h1>

        </div>
    )
}
export default Stomach;