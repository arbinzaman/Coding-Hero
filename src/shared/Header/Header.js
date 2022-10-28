import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import '../Header/Header.css'

const Header = () => {
    const { user , logOut} = useContext(AuthContext);
    const handleLogOut  =()=>{
        logOut()
        .then (()=>{})
        .catch (error => console.error('error'))
    }
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/blog">BLog</Link></li>
                            <li><Link to="/signIN">Login</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Coding Hero</Link>
                </div>
                <div className="navbar-end">
                    
                      {
                        user?.uid ? 
                       <>
                        <span className=""><img src={user?.photoURL} title={user?.displayName} className="  h-10 rounded-full" alt="" /></span>
                        <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                       </>
                        :
                        <>
                            <Link to ='/signIN' className="btn btn-ghost normal-case text-xl">Login</Link>
                            <Link to ='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                        </>
                      }
                  
                    
                </div>
            </div>
        </nav>
    );
};

export default Header;