import { useContext, useEffect } from 'react'
import MyContext from '../Context/HookContext'
import { useNavigate } from 'react-router-dom'
//import './profile.css'

function ProfilePage() {
    const {TheUser} = useContext(MyContext) 
    const Navigate = useNavigate()
    
    useEffect(()=>{
        if(!TheUser) {
            Navigate('/Login')
        }
        else{
            window.location.href='https://github.com/meetGAUROB'
        }
    }, [TheUser,Navigate])

    return null
}

export default ProfilePage