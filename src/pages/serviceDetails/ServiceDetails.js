import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';
import ReviewInput from '../ReviewInput/ReviewInput';

const ServiceDetails = () => {
    const singleService = useLoaderData();
    const [reviews, setReviews] = useState([])
    const { name, imgUrl, price, body } = singleService;
    useTitle('service-details')

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => console.log(err))
    }, [reviews])

    return (
        <>
            <div className="card w-1/2 bg-base-100 pb-8 shadow-xl my-28 mx-auto">
                <figure><img src={imgUrl} alt={name} /></figure>
                <div className="card-body mb-16 text-lg">
                    <h2 className="card-title">{name}</h2>
                    <p>{body}</p>
                    <p>price: ${price}</p>
                </div>
            </div>
            <div className='my-16'>
                <ReviewInput></ReviewInput>
            </div>
            <div className='my-44 mx-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center'>
                {
                    reviews.map(reviewData => <Review key={reviewData._id} reviewData={reviewData}></Review>)
                }
            </div>
        </>
    );
};

export default ServiceDetails;