/** function Aruna(name){
    return(
       <>
             <ol>
            <li>Fruits</li>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Mango</li>
            </ul>
            <li>Vegetables</li>
            <ol className="roman">
                <li>Carrot</li>
                <li>Tomato</li>
                <li>Onion</li>
            </ol>
            <li>Birds</li>
            <ul className="symbols">
                <li>Sparrow</li>
                <li>Crow</li>
                <li>Peacock</li>
            </ul>
        </ol>
       </>
       
    )
}
export default Aruna; */

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Params from './Params.jsx';
function Aruna(){
    return(
        <Router>
            <h1>
            <Routes>
                <Route path="/:id" element={<Params/>}/>
            </Routes>
            </h1>
        </Router>
  
  );
}
export default Aruna;