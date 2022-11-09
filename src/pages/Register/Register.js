import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useTitle('sign up')
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                form.reset()
                setError('')
                navigate('/login')
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })
    }


    return (
        <form onSubmit={handleSignUp} className='md:w-2/4 mx-auto my-60 mt-60'>
            <h3 className='text-4xl text-center mb-12'>Please Sign Up Now!</h3>
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">First name</label>
                            <input name="fname" type="text" autocomplete="current-password" className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input id="last-name" name="lname" type="text" autocomplete="current-password" className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700">Image Url</label>
                            <input id="imgUrl" name="imgUrl" type="text" autocomplete="current-password" className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Image Url" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Last Email</label>
                            <input id="email" name="email" type="email" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="email" />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="password" />
                        </div>
                    </div>
                </div>
                <p className='text-red-400 mx-8'>{error}</p>
                <small className='px-8 text-base'>Already haven account? <Link className='link-hover text-yellow-500' to="/login">Log In</Link> </small>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign Up</button>
                </div>
            </div>
        </form>
    );
};

export default Register;