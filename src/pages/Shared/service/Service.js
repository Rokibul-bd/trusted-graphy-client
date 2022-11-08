import React from 'react';

const Service = ({ service }) => {
    const { imgUrl, name, body, price } = service
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-full h-96 rounded-lg' src={imgUrl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='mt-4'>{body.slice(0, 99)}</p>
                <p>previous Price : <del>${price + 100}</del></p>
                <p className='-mt-8'>price : ${price}</p>
            </div>
        </div>
    );
};

export default Service;