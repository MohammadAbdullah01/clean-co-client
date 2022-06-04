import axios from 'axios';
import React, { useState, useEffect } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // axios.get('http://localhost:5000/service')
        //     .then(res => setServices(res.data))
        (async () => {
            const res = await fetcher.get('/service')
            setServices(res.data);
        })()
    }, [])
    console.log(services);
    return (
        <div>
            <h1>services </h1>
        </div>
    );
};

export default Services;