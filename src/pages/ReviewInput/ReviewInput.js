import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewInput = () => {
    const { user } = useContext(AuthContext)

    const handleReviewForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const review = form.review.value;
        const imgUrl = form.imgUrl.value;
        const email = form.email.value;

        const myReviews = {
            name,
            review,
            imgUrl,
            email
        }

        fetch('https://trusted-graphy-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
            .catch(err => console.error(err))


    }
    return (
        <form onSubmit={handleReviewForm} className="w-2/4 mx-auto">
            <div>
                <input type="text" name="name" placeholder="Name" className="input input-bordered input-error w-full mb-12" required />
            </div>
            <div>
                <input defaultValue={user?.email} type="email" name="email" className="input input-bordered input-error w-full mb-12" readOnly />
            </div>
            <textarea className="textarea textarea-success w-full" name="review" placeholder="Type Your Review" required></textarea>
            <br />
            <input type="text" placeholder="Img Url" className="input input-bordered input-success w-full  my-8" name="imgUrl" required />
            <br />
            <button type='submit' className='btn'>Add Review</button>
        </form>
    );
};

export default ReviewInput;