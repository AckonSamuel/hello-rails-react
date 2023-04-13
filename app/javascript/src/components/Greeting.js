import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/configureStore';
import randomGreeting from '../redux/actions/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    store.dispatch(randomGreeting());
  }, []);

  return (
    <h1>{greeting.greeting}</h1>
  );
};

export default Greeting;
