import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Shared/service/Service';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [services])
    return (
        <div>
            <Banner></Banner>
            <h4 className='text-6xl text-center'>My Serviceses</h4>
            <div className='grid md:grid-cols-2 justify-center gap-12 my-36'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='flex justify-center mb-12'>
                <button className="btn glass bg-black hover:text-black">More Services</button>
            </div>
        </div>
    );
};

export default Home;