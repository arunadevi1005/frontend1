import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import User from './User';


function Apps() {
    return (
        <Router>
        <div className="App">
        
        </div>
        <Routes>
          <Route path="/" element={<User/>}> </Route>
          <Route path="/CreateUser" element={<CreateUser/>}></Route>
          <Route path="/UpdateUser" element={<UpdateUser/>}></Route>
        </Routes>
        
      </Router>
    )
}
export default Apps;