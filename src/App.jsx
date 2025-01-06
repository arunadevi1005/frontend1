
import './Detail.css';
//import Form from './form.jsx';
//import Apple from './Apple.jsx';
//import Detail from './Detail.jsx'

import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  

  return (
    <>
      
      <Router>
      
        <nav>
        <div className="header">
            <a href="/">
            <img src='https://tse2.mm.bing.net/th?id=OIP._ATdCQVSmjrY1dVNpWAQWAHaE8&pid=Api&P=0&h=180'></img>BMW</a>
            
            <Link to="/" className="home">Home</Link>
            <Link to="/about" className="about">About</Link>
            <Link to="/contact" className="contact">Contact</Link>
         </div>   
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        
      </Router>
    

    
    
    </>
    
  )
}

export default App
