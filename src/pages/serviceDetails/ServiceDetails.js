import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    const singleService = useLoaderData();
    const { name, imgUrl, price, body } = singleService;
    useTitle('service-details')
    return (
        <div className="card w-1/2 bg-base-100 pb-8 shadow-xl my-28 mx-auto">
            <div className="card-body mb-16 text-lg">
                <h2 className="card-title">{name}</h2>
                <p>{body}</p>
                <p>price: ${price}</p>
            </div>
            <figure><img src={imgUrl} alt={name} /></figure>
        </div>
    );
};

export default ServiceDetails;