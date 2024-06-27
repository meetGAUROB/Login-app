import { useContext, useState } from 'react'
import MyContext from '../Context/HookContext'
import {  useNavigate } from 'react-router-dom';
import Githublogo from './5847f98fcef1014c0b5e48c0.png'
//import './login.css'

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(MyContext);
    const navigate = useNavigate()

    const submission = (e)=>{
        e.preventDefault();
        setUser({username, password});
        navigate('/Profile');

    }
  return (
    <div className='login-container'>

        <img 
        className='git-logo' 
        src={Githublogo}
        alt='Git-Logo'
         
        />

        <div className="form-container">
        <input 
        type='text' 
        className='name-field'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='UserName'
        />
        
        <input 
        type='password' 
        className='pass-field'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='PassWord'
        />
        <button className='butt-field' onClick={submission}>Log in</button>
        </div>

    </div>
  )
}

export default LoginPage