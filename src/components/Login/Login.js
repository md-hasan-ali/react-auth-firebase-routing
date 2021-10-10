import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, signInWithGithub } = useAuth();
    return (
        <div>
            <h2>Please LogIn..</h2>
            <button onClick={signInWithGoogle}>Google SignIn</button>
            <button onClick={signInWithGithub}>GitHub SignIn</button>
            <br />
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Login;