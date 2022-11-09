import React from 'react';

const Review = ({ reviewData }) => {
    console.log(reviewData)
    const { name, review, imgUrl } = reviewData
    return (

        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <img className='w-24 h-24 rounded-full mx-auto -mt-28' src={imgUrl} alt="" />
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
                <div className="card-actions">
                    <button className="btn btn-primary mt-8">Update Now</button>
                </div>
            </div>
        </div>

    );
};

export default Review;