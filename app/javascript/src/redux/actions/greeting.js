import { createAsyncThunk } from '@reduxjs/toolkit';
import { RANDOM_GREETING } from '../actionTypes';
import axios from 'axios';

export const randomGreeting = createAsyncThunk(
    RANDOM_GREETING,
    async () => {
        const { data } = await axios.get('/messages')
        return data;
    }
);
