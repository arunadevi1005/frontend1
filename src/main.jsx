import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import Name from './Name.jsx'
//import './Detail.css'
//import Aruna from './Aruna.jsx';
// import './List.css';
//import Useref from './Useref.jsx'
//import Usememo from './Usememo.jsx';

import Apps from './Apps.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Apps/>
  </StrictMode>,
)
