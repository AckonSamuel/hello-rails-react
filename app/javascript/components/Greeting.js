import React, { useEffect, useState } from 'react';
import store from '../redux/configureStore';
import { randomGreeting } from '../redux/actions/greeting';
import { useSelector } from 'react-redux';

const Greeting = () => {
    const greeting = useSelector(state => state.greeting);

    useEffect(() => {
        store.dispatch(randomGreeting())
    }, []);

    return(
        <h1>{greeting.message}</h1>
    )
}

export default Greeting;