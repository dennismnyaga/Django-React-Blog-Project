import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts, selectCategoryFilter } from '../features/blogger/bloggerSlice'
import BlogExcerpt from '../features/blogger/BlogExcerpt';
import SidePanel from './SidePanel';
import { fetchCategories, selectAllCategories } from '../features/category/categorySlice';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const Home = () => {

    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const errors = useSelector(getPostsError);
    const categoryFilter = useSelector(selectCategoryFilter);

    const categories = useSelector(selectAllCategories);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCategories())
    },[dispatch])

    useEffect(() => {
        if(postsStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }, [dispatch, postsStatus])

    const filteredPosts = categoryFilter ? posts.filter((post) => post.category.some((categoryId) => categories.find((category) => category.id === categoryId)?.name === categoryFilter))
  : posts;

    
    let content;
    if (postsStatus === "loading") {
        content = <div className="center">
            <Skeleton variant="rectangular" animation="wave" width={210} height={118} />
        </div>
    } else if (postsStatus === "succeeded") {
        content = filteredPosts.map((post) => (
            <BlogExcerpt key={post.id} postId={post.id} post={post} posterId={post.owner} />
        ));
    } else if (postsStatus === "failed") {
        content = <p>Failed {errors}</p>;
    }
    
    return (
        <div className='container m-auto mt-5'>
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 shadow-lg text-center pl-12 py-3'>
                <div className='container mx-auto grid grid-cols-2 gap-2'>{content}</div>
            </div>
            <div className=''><SidePanel /></div>
        </div>
        </div>
  )
}

export default Home