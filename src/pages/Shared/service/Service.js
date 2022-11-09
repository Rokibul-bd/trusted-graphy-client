import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { imgUrl, name, body, price, _id } = service
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <PhotoProvider>
                <div className="foo">
                    <PhotoView src={imgUrl}>
                        <img className='w-full h-96 rounded-lg' src={imgUrl} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>
            {/* <figure><img className='w-full h-96 rounded-lg' src={imgUrl} alt="Movie" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p title={body} className='mt-4 text-ellipsis'>{body.slice(0, 99)}...</p>
                <p>previous Price : <del>${price + 100}</del></p>
                <p className='-mt-8'>price : ${price}</p>
                <Link to={`/services/${_id}`}><button className="btn gap-2 w-2/4">View Details</button></Link>

            </div>
        </div>
    );
};

export default Service;