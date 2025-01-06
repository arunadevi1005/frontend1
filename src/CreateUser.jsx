import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const CreateUser = () => {
    const[Name,setName]=useState('');
    const[Email,setEmail]=useState('');
    const[Address,setAddress]=useState('');
    const navigate=useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/user/create',{Name,Email,Address})
        .then((response)=>{
            console.log(response.data.users);
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })  
    }

    return (
        <div className='createuser'>
            <form onSubmit={submit}>
                <h2>CreateUser</h2>
                <label>Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} name="Name" placeholder='Enter your name'></input><br/><br/>
                <label>Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} name="Email" placeholder='Enter your email'></input><br/><br/>
                <label>Address:</label><br/>
                <textarea id="address" onChange={(e)=>setAddress(e.target.value)} name="Address" rows="6" cols="35"></textarea><br/><br/>
                <button type = "submit">Create</button>
            </form>
        </div>
    );
}

export default CreateUser;