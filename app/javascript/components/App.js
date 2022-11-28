import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

const App = () => <BrowserRouter>
    <Routes>
        <Routes path='/' elements={<Home />}></Routes>
        <Routes path='/greeting' elements={<Greeting />}></Routes>
    </Routes>
</BrowserRouter>;

export default App;