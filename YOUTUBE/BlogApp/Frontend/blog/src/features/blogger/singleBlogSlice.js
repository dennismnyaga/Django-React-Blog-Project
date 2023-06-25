import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const apiUrl = 'http://127.0.0.1:8000';


const POST_URLS = `${apiUrl}/blog/`;



const initialState = {
  post: [],
  status: "idle",
  error: null,
}



export const fetchPostById = createAsyncThunk(
    "post/fetchPostById",
    async (postId) => {
      const response = await axios.get(`${POST_URLS}${postId}/`);
      return response.data;
    }
  );




  

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.post.push(action.payload);
            },
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPostById.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.post = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
           
              
        },
    });

export const selectPost = (state) => state.post.post;
export const getPostStatus = (state) => state.post.status;
export const getPostError = (state) => state.post.error;


export const { postAdded } = postSlice.actions;
export default postSlice.reducer;