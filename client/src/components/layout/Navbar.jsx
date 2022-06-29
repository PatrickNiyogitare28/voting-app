import React from 'react'
import './styles.css';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='navbar-container'>
            <h1>{user?.name}</h1>
        </div>
    )
}

export default Navbar;