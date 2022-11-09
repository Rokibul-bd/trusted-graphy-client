import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Protient PhotoGraphy</Link>
                <Link className="link link-hover">Feshion PhotoGraphy</Link>
                <Link className="link link-hover">Eadutactional PhotoGraphy</Link>
                <Link className="link link-hover">Jounalishm PhotoGraphy</Link>
            </div>
            <div>
                <span className="footer-title">My Details</span>
                <Link className="link link-hover">About Me</Link>
                <Link className="link link-hover">Contact Me</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;