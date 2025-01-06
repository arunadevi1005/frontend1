import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Color.css';
const User = () => {
    
    const navigate=useNavigate();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get('https://backendhosting-1.onrender.com/api/user/fetch')
        .then((response)=>{
            setUser(response.data.users);
            
        })
        .catch((error)=>{
            console.log(error);})
    },[]);
    const deleteuser=(id)=>{
        axios.delete(`https://backendhosting-1.onrender.com/api/user/deleted/${id}`)
        .then((response)=>{
            console.log("user deleted"); 
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        
        <div className='user'>
            <p><marquee>Hiii Guyssss👋👍</marquee></p>
            <h1>User</h1>
             
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                {
                    user.map((users)=>(
                        <tr>
                            <td>{users.Name}</td>
                            <td>{users.Email}</td>
                            <td>{users.Address}</td>
                            <td>
                                
                                    <Link to={`/UpdateUser/${users._id}`}>
                                    <button> Update</button>
                                    </Link>
                                <button onClick={(e)=>deleteuser(users._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            
        </div>
    );
}

export default User;



