import React from 'react';

const Blog = ({ blog }) => {
    const { answer, question } = blog
    return (
        <div className='shadow-lg rounded-lg w-2/4 mx-auto p-8 my-12'>
            <h3 className='text-4xl mb-12'>{question}</h3>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;