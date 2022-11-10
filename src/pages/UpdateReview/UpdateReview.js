import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const UpdateReview = () => {
    const { user } = useContext(AuthContext)
    const handleReviewAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const review = form.review.value;
        const imgUrl = form.imgUrl.value;
        const email = form.email.value;

        const updateReviews = {
            name,
            review,
            imgUrl,
            email
        }

        return updateReviews;
    }
    const handleUpdate = id => {
        const updateData = handleReviewAdd
        fetch(`https://trusted-graphy-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleReviewAdd} className="w-2/4 mx-auto my-56">
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
            <button onClick={handleUpdate} type='submit' className='btn'>Update Review</button>
        </form>
    );
};

export default UpdateReview;