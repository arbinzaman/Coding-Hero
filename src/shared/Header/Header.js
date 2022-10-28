import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import '../Header/Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('error'))
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


                    <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                        <span>Light</span>
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                        </span>
                        <span>Dark</span>
                    </label>

                    {
                        user?.uid ?
                            <>
                                <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 rounded-full" alt="" /></span>
                                <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                            </>
                            :
                            <>
                                <Link to='/signIN' className="btn btn-ghost normal-case text-xl">Login</Link>
                                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                            </>
                    }


                </div>
            </div>
        </nav>
    );
};

export default Header;