import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    useTitle('blogs')
    return (
        <div className='my-56'>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;