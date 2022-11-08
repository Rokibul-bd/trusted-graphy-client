import React from 'react';

const Showcase = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/KzbgK9P/showcase-Banner.jpg" className="max-w-lg rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Breacking News!</h1>
                    <p className="py-6 text-xl">Perchuse my any Premium Photography order you can get Basic Photo Graphy 2 Hours</p>
                    <p className="py-6 text-lg">Capture your Best Moment && you Want you can caputer your moments</p>
                    <button className="btn btn-primary">Perchuse Services</button>
                </div>
            </div>
        </div>
    );
};

export default Showcase;