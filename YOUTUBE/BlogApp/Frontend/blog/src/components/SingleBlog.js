import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostById, getPostError, getPostStatus, selectPost } from '../features/blogger/singleBlogSlice'
import SingleBlogExcerpt from '../features/blogger/SingleBlogExcerpt';
import { useParams } from 'react-router-dom';
import SidePanel from './SidePanel';
import Skeleton from '@mui/material/Skeleton';


const SingleBlog = () => {
  const post = useSelector(selectPost);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  const dispatch = useDispatch();

  const postid = useParams();
  const postId = postid.id;

  useEffect(() => {
      dispatch(fetchPostById(postId));
    
  },[dispatch])


  
  let content;
    if (postStatus === "loading") {
        content = <div className="mt-2 mb-3">
          <Skeleton className=''  />
          <Skeleton className='' height='450px' variant="rectangular" animation="wave"  />
            <Skeleton className=''  />
            <Skeleton className='' />
        </div>
    } else if (postStatus === "succeeded") {
        content = <SingleBlogExcerpt key={post.id} postId={post.id} post={post} posterId={post.owner} />
       
    } else if (postStatus === "failed") {
        content = <p>Failed {error}</p>;
    }
  return (
    <div className='container m-auto mt-5'>
      <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 shadow-lg text-center py-3'>
                <div className='container'>{content}</div>
            </div>
            <div className=''><SidePanel /></div>
        </div>
    </div>
    
  )
}

export default SingleBlog


