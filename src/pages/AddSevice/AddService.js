import React from 'react';

const AddService = () => {
    const handleAddServiceForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const body = form.body.value;
        const price = form.price.value;
        const imgUrl = form.imgUrl.value;
        const myService = {
            name,
            body,
            price,
            imgUrl
        }

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myService)
        })
            .then(() => {
                form.reset()
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='my-56'>
            <h3 className='text-center mb-24 text-4xl text-teal-600'>Add Your Service</h3>
            <form onSubmit={handleAddServiceForm} className="w-2/4 mx-auto">
                <div>
                    <input type="text" name="name" placeholder="Service Name" className="input input-bordered input-error w-full mb-8" required />
                </div>
                <div>
                    <input type="text" name="body" placeholder="Description" className="input input-bordered input-error w-full mb-8" required />
                </div>
                <div>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered input-error w-full mb-8" required />
                </div>
                <input type="text" placeholder="Service Image Url" className="input input-bordered input-success w-full mb-8" name="imgUrl" required />
                <br />
                <button type='submit' className='btn'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;