import React, {useEffect, useState } from 'react'
import axios from 'axios';

const LandingPage = () => {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios
        .get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Landing Page : {hello}</h1>
        </div>
    );
}

export default LandingPage