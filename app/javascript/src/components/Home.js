import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        Hello there, you are welcome to this empty page.
        I hope you fill it with surprise!
      </h1>
      <button onClick={() => { navigate('/greeting'); }}>View a greeting</button>
    </>
  );
};

export default Home;
