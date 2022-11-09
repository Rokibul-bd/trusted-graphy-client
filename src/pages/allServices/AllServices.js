import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Service from '../Shared/service/Service';

const AllServices = () => {
    const [services, setServices] = useState([])
    useTitle('services')
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [services])

    return (
        <div className='grid md:grid-cols-2 my-56 gap-12'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default AllServices;