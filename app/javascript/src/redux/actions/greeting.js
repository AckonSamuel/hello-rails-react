import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import RANDOM_GREETING from '../actionTypes';

const randomGreeting = createAsyncThunk(
  RANDOM_GREETING,
  async () => {
    const { data } = await axios.get('/messages');
    return data;
  },
);

export default randomGreeting;
