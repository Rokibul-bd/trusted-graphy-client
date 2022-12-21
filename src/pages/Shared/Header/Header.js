import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuList = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user?.email ? <>
                <li><Link to="/reviews">My Reviews</Link></li>
                <li><Link to="/addservice">Add Service</Link></li>
                <li><p>{user?.email}</p></li><button onClick={handleLogOut} className='btn'>Log Out</button>
            </> : <><li><Link to="/login">Log In</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
            </>
        }

    </>




    return (
        <div className="navbar bg-base-200 shadow-md">
            <div className="navbar-start container mx-auto">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuList
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><h1 className="mb-5 text-xl font-bold">Trusted Graphy</h1></Link>

            </div>
            <div className="navbar-center hidden lg:flex ml-auto">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuList
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;