import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next, name, price } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full mt-10">
            <div className='img-gradient w-full'>
                <img src={image} className="w-full rounded-xl" alt="" />
            </div>
            <div>
                <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 top-28">
                    <h3 className='text-6xl text-white font-bold text-center mx-14'>{name}</h3>
                </div>
                <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 top-36 mt-12 mx-14">
                    <p className=' text-white text-center text-2xl'>Price : ${price}</p>
                </div>
            </div>
            <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;