import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';


const UpdateUser = () => {
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Address,setAddress]=useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://backendhosting-1.onrender.com/api/user/${id}`)
            .then((response) => {
                const user = response.data.user;
                setName(user.Name);
                setEmail(user.Email);
                setAddress(user.Address);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const updateuser=(e)=>{
        e.preventDefault();
        axios.put(`https://backendhosting-1.onrender.com/api/user/update/${id}`,{Name,Email,Address})
        .then((response)=>{
            console.log(response.data.users);
            navigate('/');
        })
        .catch((error)=>{
            console.log(error); });
    }
    return (
        <div className='updateuser'>
            <form onSubmit={updateuser}>
                
                <h2>UpdateUser</h2>
                <label>Name:</label>
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} name="Name" placeholder='Enter your name' ></input><br/><br/>
                <label>Email:</label>
                <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} name="Email" placeholder='Enter your email'></input><br/><br/>
                <label>Address:</label><br/>
                <textarea id="address" value={Address} onChange={(e)=>setAddress(e.target.value)} name="Address" rows="6" cols="35" ></textarea><br/><br/>
                <button type ="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateUser;