import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'
const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setpassword] = useState('')
    const {setUser} = useContext(Usercontext)
    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2> Login</h2>
        <input type='text' value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        {'   '}
        <input type='text' placeholder='password' value={password}  onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default Login