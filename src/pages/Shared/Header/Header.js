import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base w-3/4 mx-auto">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Trusted Graphy</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Home</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Log In</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;