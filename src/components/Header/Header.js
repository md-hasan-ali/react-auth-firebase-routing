import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>LogIn</Link>
            <h2>{user.displayName}</h2>
            {user?.displayName && <button onClick={logout}>LogOut</button>}
        </div>
    );
};

export default Header;