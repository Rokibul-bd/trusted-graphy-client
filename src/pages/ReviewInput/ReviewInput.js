import React from 'react';

const ReviewInput = () => {
    const handleReviewForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const review = form.review.value;
        const imgUrl = form.imgUrl.value;
        console.log(name, review, imgUrl)
        const myReviews = {
            name,
            review,
            imgUrl
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.error(err))
    }
    return (
        <form onSubmit={handleReviewForm} className="w-2/4 mx-auto">
            <div>
                <input type="text" name="name" placeholder="Name" className="input input-bordered input-error w-full mb-12" required />
            </div>
            <textarea className="textarea textarea-success w-full" name="review" placeholder="Type Your Review" required></textarea>
            <br />
            <input type="text" placeholder="Type here" className="input input-bordered input-success w-full  my-8" name="imgUrl" required />
            <br />
            <button type='submit' className='btn'>Add Review</button>
        </form>
    );
};

export default ReviewInput;