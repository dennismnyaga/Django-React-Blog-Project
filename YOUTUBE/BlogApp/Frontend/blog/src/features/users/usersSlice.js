import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const apiUrl = 'http://127.0.0.1:8000';
const USERS_URL = `${apiUrl}/users/`;


const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return response.data
})



const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer