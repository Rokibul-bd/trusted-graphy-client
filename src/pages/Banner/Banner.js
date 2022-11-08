import React from 'react';
import './banner.css'
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: 'https://i.ibb.co/cxDYGSs/portrait-Photography.jpg',
        prev: 6,
        id: 1,
        next: 2,
        name: 'Portrait Photography',
        price: 600
    },
    {
        image: 'https://i.ibb.co/FKyY792/jounerlism-Photography.jpg',
        prev: 1,
        id: 2,
        next: 3,
        name: 'Photojournalism',
        price: 400
    },
    {
        image: 'https://i.ibb.co/YbFKv1R/feshion-Photography.jpg',
        prev: 2,
        id: 3,
        next: 4,
        name: 'Fashion Photography',
        price: 800
    },
    {
        image: 'https://i.ibb.co/NY7Q6hW/sport-Photography.jpg',
        prev: 3,
        id: 4,
        next: 5,
        name: 'Sports Photography',
        price: 500
    },
    {
        image: 'https://i.ibb.co/DQnc1dq/Education-Photography.jpg',
        prev: 4,
        id: 5,
        next: 6,
        name: 'Editorial Photography',
        price: 400
    },
    {
        image: 'https://i.ibb.co/qr1809n/archutechtural-Photography.jpg',
        prev: 5,
        id: 6,
        next: 1,
        name: 'Architectural Photography',
        price: 800
    }
]

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full py-12">
                {
                    bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;