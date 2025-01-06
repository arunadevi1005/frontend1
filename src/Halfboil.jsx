
import Stomach from './Stomach.jsx';
const Halfboil=(need)=>{
    return(
        <div>
            <h1>Halfboil</h1>
            <Stomach name={need.name}/>
        </div>
    )
}
export default Halfboil;