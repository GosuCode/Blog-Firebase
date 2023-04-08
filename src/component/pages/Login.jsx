import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'


const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("IsAuth", true);
            setIsAuth(true)
            navigate('/')
        })
    }
    return (
        <div>
            <h3>Sign with google to continue</h3>
            <button
                className='bg-blue-400 rounded-md p-2'
                onClick={signIn}>Sign with Google</button>
        </div>
    )
}

export default Login
