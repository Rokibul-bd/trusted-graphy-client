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
    return (
        <div>
            <div className="navbar bg-base">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Trusted Graphy</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><p>{user?.email}</p></li>
                        {
                            user?.email ? <button onClick={handleLogOut} className='btn'>Log Out</button> : <><li><Link to="/login">Log In</Link></li>
                                <li><Link to="/register">Sign Up</Link></li></>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;