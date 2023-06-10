import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout, selectIsAuthenticated } from '../features/authentications/authSlice';
import { setCategoryFilter } from '../features/blogger/bloggerSlice';


const NavBar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  const handleCategoryClick = ((category) => {
    if(category === 'all'){
      dispatch(setCategoryFilter(null));
    }else{
      dispatch(setCategoryFilter(category));
    console.log(category)
    }
    
  })

  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <div className='shadow py-5 sticky top-0 bg-white'>
        <nav className='flex justify-between mx-20 h-8 items-center'>
            <Link to='/' onClick={() => handleCategoryClick('all')}><h1 className='font-extrabold text-3xl'>DA BLOGGER</h1></Link>
            <div className=' uppercase text-metal font-semibold'>
              <ul className='flex gap-10'>
                <li className='cursor-pointer' onClick={() => handleCategoryClick('all')}>All</li>
                <li className='cursor-pointer' onClick={() => handleCategoryClick('technology')}>Technology</li>
                <li className='cursor-pointer' onClick={() => handleCategoryClick('politics')}>Politics</li>
                <li className='cursor-pointer' onClick={() => handleCategoryClick('worldlife')}>WorldLife</li>
                <li className='cursor-pointer' onClick={() => handleCategoryClick('climate')}>Climate</li>
                <li className='cursor-pointer' onClick={() => handleCategoryClick('world')}>World</li>
              </ul>
            </div>
            <div className='flex gap-3 uppercase font-semibold'>
            {isAuthenticated ? (
              <div className='flex items-center gap-4'>
                <div className='text-sm flex gap-2'>Hello <p className='underline text-midnight cursor-pointer'>@{user.username}</p></div>
                <button onClick={handleLogout} className='bg-gradient-to-r from-pink-color to-pale-pink py-3 px-5 rounded-xl text-white font-semibold text-lg shadow-md shadow-pale-pink'>Logout</button>
              </div>
          ) : (
            <>
              <Link to='/login'><button className='bg-gradient-to-r from-pink-color to-pale-pink py-3 px-5 rounded-xl text-white font-semibold text-lg shadow-md shadow-pale-pink'>Login</button></Link>
              <Link to='/register'><button className='bg-gradient-to-r from-pink-color to-pale-pink py-3 px-5 rounded-xl text-white font-semibold text-lg shadow-md shadow-pale-pink'>Register</button></Link>
            </>
          )}
              
            </div>
        </nav>
    </div>
  )
}

export default NavBar