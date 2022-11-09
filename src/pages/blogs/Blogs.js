import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div className='my-56'>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;