import React from 'react';

const Review = ({ reviewData }) => {
    const { _id, name, review, imgUrl } = reviewData

    const handleDelete = id => {
        const procced = window.confirm('Are you sure delete this Review!')
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(() => { })
                .catch(err => console.log(err))
        }
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <img className='w-24 h-24 rounded-full mx-auto -mt-28' src={imgUrl} alt="" />
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary mt-8">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default Review;