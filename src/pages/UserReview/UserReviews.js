import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview'

const UserReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/userreview')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='my-56'>
            <h2 className='text-4xl text-center text-teal-500 mb-44'>You Have Total Review : {reviews.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                {
                    reviews.map(reviewData => <SingleReview key={reviewData._id} reviewData={reviewData}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default UserReviews;