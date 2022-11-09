import React from 'react';
import { Link } from 'react-router-dom';

const AuthorInfo = () => {
    return (
        <div className="hero min-h-fit mb-24" style={{ backgroundImage: `url("https://i.ibb.co/XY2HWyB/67e9a0f56193f6af7ffc53c603a651a2.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-20">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Beuatiful Camera</h1>
                    <p className="mb-5">Hello, This is Jhon deo , profesonal photographer. you want to caputer your best moment . i can do it. on my beautiful camera </p>
                    <Link to="/allservices"><button className="btn btn-primary">Get Now Service</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;