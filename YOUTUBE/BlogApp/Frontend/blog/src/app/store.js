import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/blogger/bloggerSlice'
import usersReducer from '../features/users/usersSlice'
import postReducer from '../features/blogger/singleBlogSlice'
import authReducer from '../features/authentications/authSlice'
import categoriesReducer from '../features/category/categorySlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    post: postReducer,
    auth: authReducer,
    categories: categoriesReducer,
  },
});
