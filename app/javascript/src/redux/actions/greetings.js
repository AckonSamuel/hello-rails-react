import { createAsyncThunk } from '@reduxjs/toolkit';
import { RANDOM_GREETING } from '../actionTypes';
import axios from 'axios';

const randomGreeting = createAsyncThunk(
    RANDOM_GREETING,
    async () => {
        const { data } = await axios.get('/messages')
        return data;
    }
);

export default randomGreeting;
