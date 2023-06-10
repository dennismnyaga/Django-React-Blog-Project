import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const apiUrl = 'http://127.0.0.1:8000';


const POST_URLS = `${apiUrl}/blog/`;
const ADDPOSTS_URL = `${apiUrl}/blog/createblog`



const initialState = {
  posts: [],
  status: "idle",
  error: null,
  categoryFilter: null,  
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(POST_URLS);
    return response.data;
  }
);






  

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
          },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
           
              
        },
    });

export const { setCategoryFilter } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const selectCategoryFilter = (state) => state.posts.categoryFilter;


export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;