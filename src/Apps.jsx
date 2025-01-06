import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import User from './User';
import './Color.css';


function Apps() {
    return (
      <>

      
<Router>
    <div className="App">
      
        <nav className="navbar">
        
            <ul className="nav-links">
                <li>
                    
                    <Link to="/">User</Link>
                </li>
                <li>
                    <Link to="/CreateUser">Create User</Link>
                </li>
                        
                   </ul>
        </nav>
    </div>
        <Routes>
          <Route path="/" element={<User/>}> </Route>
          <Route path="/CreateUser" element={<CreateUser/>}></Route>
          <Route path="/UpdateUser/:id" element={<UpdateUser/>}></Route>
        </Routes>
        
      </Router>

    </>
    )
}
export default Apps;