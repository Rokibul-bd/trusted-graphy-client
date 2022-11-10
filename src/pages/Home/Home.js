import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Banner from '../Banner/Banner';
import Service from '../Shared/service/Service';
import Showcase from '../Showcase/Showcase';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://trusted-graphy-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [services])
    return (
        <div>
            <Banner></Banner>
            <h4 className='text-6xl text-center'>My Serviceses</h4>
            <div className='grid lg:grid-cols-2 justify-center gap-12 my-36'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='flex justify-center mb-12'>
                <Link to="/allservices"><button className="btn glass bg-black hover:text-black">See All</button></Link>
            </div>
            <Showcase></Showcase>
            <AuthorInfo></AuthorInfo>
        </div>
    );
};

export default Home;